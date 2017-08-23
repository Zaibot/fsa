const { assert } = require(`chai`);
const { Factory, isError } = require(`../es5`);

const actionMarco = Factory(`Marco`);
const actionPolo = Factory(`Polo`);

class Test { }

describe(`isError`, () => {
    it(`{}`, () => {
        assert.isFalse(isError({}));
    });
    describe(`payload`, () => {
        it(`object`, () => {
            assert.isFalse(isError({ type: `test`, payload: {} }));
        });
        it(`error`, () => {
            assert.isFalse(isError({ type: `test`, payload: Error() }));
        });
    });
    describe(`error`, () => {
        it(`error`, () => {
            assert.isTrue(isError({ type: `test`, payload: Error(), error: true }));
        });
        it(`object error`, () => {
            assert.isTrue(isError({ type: `test`, payload: {}, error: true }));
        });
        it(`class error`, () => {
            assert.isFalse(isError({ type: `test`, payload: new Test(), error: true }));
        });
    });
});
