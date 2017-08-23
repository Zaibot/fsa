const { assert } = require(`chai`);
const { Factory, isAction } = require(`../es5`);

const actionMarco = Factory(`Marco`);
const actionPolo = Factory(`Polo`);

class Test { }

describe(`isAction`, () => {
    it(`{}`, () => {
        assert.isFalse(isAction({}));
    });
    describe(`payload`, () => {
        it(`object`, () => {
            assert.isTrue(isAction({ type: `test`, payload: {} }));
        });
        it(`unspecified`, () => {
            assert.isFalse(isAction({ type: `test` }));
        });
        it(`undefined`, () => {
            assert.isFalse(isAction({ type: `test`, payload: undefined }));
        });
        it(`error`, () => {
            assert.isFalse(isAction({ type: `test`, payload: Error() }));
        });
        it(`class`, () => {
            assert.isFalse(isAction({ type: `test`, payload: new Test() }));
        });
    });
    describe(`error`, () => {
        it(`error`, () => {
            assert.isTrue(isAction({ type: `test`, payload: Error(), error: true }));
        });
        it(`object error`, () => {
            assert.isTrue(isAction({ type: `test`, payload: {}, error: true }));
        });
        it(`class error`, () => {
            assert.isFalse(isAction({ type: `test`, payload: new Test(), error: true }));
        });
    });
    describe(`marko`, () => {
        it(`valid`, () => {
            assert.isTrue(isAction(actionMarco({})));
        });
    });
    describe(`polo`, () => {
        it(`valid`, () => {
            assert.isTrue(isAction(actionPolo({})));
        });
    });
});
