'use strict';

if (!Error.captureStackTrace) throw new Error('Error.captureStackTrace does not exist!');

var util = require('./util');
var BaseError = require('./base_error');
var v = require('./validator').v;
var check = require('./validator').check;

var Errors = {
    template: null,
};
exports = module.exports = Errors;

/**
 * set the separator for multi error stacks.
 *
 * Default to "\n==== Pre-Error-Stack ====\n"
 *
 * @param  {String} separator
 * @method setErrorStackSeparator(separator)
 */
exports.setErrorStackSeparator = function(separator) {
    BaseError.prototype.ERROR_STACK_SEPARATOR = separator;
};

/**
 * set the connector for multi error messages. Default to " && "
 *
 * @param  {String} connector
 * @return {Undefined}
 * @method setMessageConnector(connector)
 */
exports.setMessageConnector = function(connector) {
    BaseError.prototype.MESSAGE_CONNECTOR = connector;
};

/**
 * define a subclass of BaseError
 *
 * @param  {Object} definition
 * @param  {String} name  the name of Error Class
 * @return {Function}  Error Class
 * @method defineError(definition, name)
 */
exports.defineError = function(definition, name) {
    if (!Errors.template) throw new Error('The error template should be defined firstly!');
    if (util.isObject(definition) === false) throw new Error('definition should be an object! Current error name=' + name);

    var E = function() {
        BaseError.apply(this, arguments);
    };
    util.inherits(E, BaseError);

    util.each(Errors.template, function(opts, key) {
        var value = definition[key];
        if (value !== undefined) {
            E.prototype[key] = value;
        } else {
            if (opts.required === true) {
                throw new Error('Missing the key "' + key + '", which is required. Current error name=' + name);
            } else {
                value = opts.default;
            }
        }
    });

    E.prototype.name = name;

    Errors[name] = E;

    return E;
};

/**
 * To determine whether it is your custom error.
 *
 * if the error is an instance of the native Error, return `false`.
 *
 * @param  {*}  error
 * @return {Boolean}
 * @method isCustomError(err)
 */
exports.isCustomError = function(err) {
    return err instanceof BaseError;
};
/**
 * alias for isCustomError
 */
exports.isError = Errors.isCustomError;

/**
 * @param  {Object} template
 * @return {Undefined}
 * @method setTemplate(template)
 */
exports.setTemplate = function(template) {
    if (util.isObject(template) === false) {
        throw new Error('template should be an object!');
    }

    var t = {};
    util.each(template, function(params, key) {
        if (util.isString(params)) {
            t[key] = {
                message: params,
                required: true,
            };
        } else if (util.isObject(params)) {
            t[key] = check(params, v.templateProp());
        } else {
            throw new Error('The value of template item should be an object or a string. Actual key=' + key + ' and value=' + JSON.stringify(params));
        }
    });
    Errors.template = t;
};

/**
 * Assigns own enumerable properties of meta to the err.meta.
 *
 * If the err.meta is undefined before assigning, it will be assigned a new object,
 * and then the own enumerable properties of second parameter will be assigned to err.meta.
 * If the err.meta is not undefined, it should be a plain object.
 *
 * the properties of meta will overwrite the properties of err.meta, if they have same name.
 *
 * @side_effect  err, err.meta
 * @param  {Error}  err  the instance of Error class or Error subclass
 * @param  {Object} meta
 * @return {Undefined}
 * @method addMeta
 */
exports.addMeta = function(err, meta) {
    if (!err.meta) err.meta = {};
    util.extend(err.meta, meta);
};

/**
 * initialize module
 *
 * @param  {Object} params
 * @param  {Object} params.template  a template for all error sub-classes
 * @param  {Array<Object>} params.definitions the definitions of error sub-classes
 * @return {Object}  a map of Error classes
 * @method init(params)
 */
exports.init = function(params) {
    Errors.setTemplate(params.template);
    var _Errors = {};
    util.each(params.definitions, function(definition, name) {
        var E = Errors.defineError(definition, name);
        _Errors[name] = E;
    });

    return _Errors;
};
