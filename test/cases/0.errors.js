'use strict';

describe('#Errors - basic', function() {
    var should = require('should');
    var Errors = require('../../lib/error');
    var Fakers = require('../fixtures/fakers');
    var Helper = require('../fixtures/helper');

    describe('init()', function() {
        afterEach(function() {
            Helper.reset(Errors);
        });

        it('with template and definitions', function() {
            Errors.init({
                template: Fakers.errorTemplates[0],
                definitions: Fakers.normalDefinitions,
            });
        });

        it('should throw error when init() without any params', function() {
            should.throws(function() {
                Errors.init();
            }, function(err) {
                err.message.should.equal('Cannot read property \'template\' of undefined');
                return true;
            });
        });
    });

    describe('setTemplate()', function() {
        afterEach(function() {
            Helper.reset(Errors);
        });

        it('should throw error when template is not an object', function() {
            should.throws(function() {
                Errors.setTemplate();
            }, function(err) {
                err.message.should.equal('template should be an object!');
                return true;
            });
        });

        it('check Errors.template', function() {
            Errors.setTemplate(Fakers.errorTemplates[0]);
            Errors.template.should.deepEqual({
                code: {
                    message: '错误码',
                    required: true,
                },
                captureErrorStack: {
                    message: '是否捕捉错误堆栈',
                    required: true,
                },
            });
        });
    });

    describe('defineError()', function() {
        afterEach(function() {
            Helper.reset(Errors);
        });

        it('should throw error when defineError() before setting template', function() {
            should.throws(function() {
                Errors.defineError({
                    code: '001',
                    captureErrorStack: true,
                }, 'Error');
            }, function(err) {
                err.message.should.equal('The error template should be defined firstly!');
                return true;
            });
        });

        it('should throw error when definition is not an object', function() {
            Errors.setTemplate(Fakers.errorTemplates[0]);

            should.throws(function() {
                Errors.defineError(null, 'Error');
            }, function(err) {
                err.message.should.equal('definition should be an object! Current error name=Error');
                return true;
            });
        });

        it('should throw error when definition missing a required key', function() {
            Errors.setTemplate(Fakers.errorTemplates[0]);

            should.throws(function() {
                Errors.defineError({}, 'Error');
            }, function(err) {
                err.message.should.equal('Missing the key "code", which is required. Current error name=Error');
                return true;
            });
        });

        it('define Errors.Error and create an instance of it', function() {
            Errors.setTemplate(Fakers.errorTemplates[0]);

            var E = Errors.defineError({
                code: '001',
                captureErrorStack: true,
            }, 'Error');

            E.should.equal(Errors.Error);

            Errors.Error.should.be.a.Function();

            var e = new E('test');
            e.should.be.an.Error();
            e.code.should.equal('001');
            e.captureErrorStack.should.equal(true);
            e.message.should.equal('test');
            e.stack.should.be.a.String();
        });
    });
});

describe('#Errors', function() {
    var should = require('should');
    var Errors = require('../../lib/error');
    var Fakers = require('../fixtures/fakers');
    var Helper = require('../fixtures/helper');

    before(function() {
        Errors.init({
            template: Fakers.errorTemplates[0],
            definitions: Fakers.normalDefinitions,
        });
    });

    describe('isCustomError()', function() {
        it('Errors.isCustomError(new Errors.Error()).should.be.true', function() {
            var e = new Errors.Error();
            Errors.isCustomError(e).should.be.true();
        });

        it('Errors.isCustomError(new Error()).should.be.false', function() {
            var e = new Error();
            Errors.isCustomError(e).should.be.false();
        });
    });

    describe('addMeta()', function() {
        it('add meta to native error', function() {
            var e = new Error();
            var meta = {a: 1};
            Errors.addMeta(e, meta);

            e.meta.should.deepEqual(meta);
        });

        it('add meta to custom error', function() {
            var e = new Errors.Error();
            var meta = {a: 1};
            Errors.addMeta(e, meta);

            e.meta.should.deepEqual(meta);
        });
    });

    describe('setErrorStackSeparator()', function() {
        afterEach(function() {
            Errors.setErrorStackSeparator('\n==== Pre-Error-Stack ====\n');
        });

        it('change error stack separator', function() {
            var separator = '\n==== !!! ====\n';
            Errors.setErrorStackSeparator(separator);

            var e1 = new Error();
            var e2 = new Errors.Error(e1);

            e2.stack.should.containEql(separator + 'Error');
        });
    });

    describe('setMessageConnector()', function() {
        afterEach(function() {
            Errors.setMessageConnector(' && ');
        });

        it('change error message connector', function() {
            Errors.setMessageConnector('||');

            var e1 = new Error('hello');
            var e2 = new Errors.Error(e1, 'world');

            e2.message.should.equal('world||hello');
        });
    });
});