'use strict';

describe('#base_error', function() {
    var should = require('should');
    var util = require('../../lib/util');
    var Errors = require('../../lib/error');
    var BaseError = require('../../lib/base_error').BaseError;
    var Fakers = require('../fixtures/fakers');
    var Helper = require('../fixtures/helper');

    var errorTemplates = Fakers.errorTemplates;

    before(function() {
        Helper.reset(Errors);
    });

    before(function() {
        Errors.init({
            template: errorTemplates[1],
            definitions: Fakers.myDefinitions,
        });
    });

    it('new BaseError(message)', function() {
        var message = 'this a BaseError';
        var err = new BaseError(message);
        err.name.should.equal('BaseError');
        err.meta.should.be.an.Object();
        err.message.should.equal(message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(message, param1, param2...paramN)', function() {
        var err = new BaseError('%s! this a %s', 'hello', 'BaseError');
        err.name.should.equal('BaseError');
        err.message.should.equal('hello! this a BaseError');
        err.stack.should.be.a.String();
    });

    it('new BaseError(meta, message)', function() {
        var message = 'this a BaseError';
        var meta = {a: 1};
        var err = new BaseError(meta, message);
        err.name.should.equal('BaseError');
        err.meta.should.equal(meta);
        err.message.should.equal(message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(error, message)', function() {
        var error = new Error();
        error.meta = {a: 1};
        var message = 'this a BaseError';
        var err = new BaseError(error, message);
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual(error.meta);
        err.message.should.equal(message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(error, meta, message)', function() {
        var _message = 'this a native error';
        var error = new Error(_message);
        error.meta = {a: 3, b: 2};
        var message = 'this a BaseError';
        var meta = {a: 1};
        var err = new BaseError(error, meta, message);
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual({a: 1, b: 2});
        err.message.should.equal(message + ' && ' + _message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(meta, error, message)', function() {
        var _message = 'this a native error';
        var error = new Error(_message);
        error.meta = {a: 3, b: 2};
        var message = 'this a BaseError';
        var meta = {a: 1};
        var err = new BaseError(meta, error, message);
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual({a: 1, b: 2});
        err.message.should.equal(message + ' && ' + _message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(meta, error, message, param1, param2...paramN)', function() {
        var _message = 'this a native error';
        var error = new Error(_message);
        error.meta = {a: 3, b: 2};
        var message = '%s! this a %s';
        var meta = {a: 1};
        var err = new BaseError(meta, error, message, 'hello', 'BaseError');
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual({a: 1, b: 2});
        err.message.should.equal('hello! this a BaseError && ' + _message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(undefined, message) should equal new BaseError(message)', function() {
        var error;
        var message = 'this a BaseError';
        var err = new BaseError(error, message);
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual({});
        err.message.should.equal(message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(null, message) should equal new BaseError(message)', function() {
        var error = null;
        var message = 'this a BaseError';
        var err = new BaseError(error, message);
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual({});
        err.message.should.equal(message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(undefined, undefined, message) should equal new BaseError(message)', function() {
        var error;
        var meta;
        var message = 'this a BaseError';
        var err = new BaseError(error, meta, message);
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual({});
        err.message.should.equal(message);
        err.stack.should.be.a.String();
    });

    it('new BaseError(0, undefined, message) should equal new BaseError(message)', function() {
        var error = 0;
        var meta;
        var message = 'this a BaseError';
        var err = new BaseError(error, meta, message);
        err.name.should.equal('BaseError');
        err.meta.should.deepEqual({});
        err.message.should.equal(message);
        err.stack.should.be.a.String();
    });
});
