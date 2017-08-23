const { assert } = require(`chai`);
const { Factory, isType } = require(`../es5`);

const actionMarco = Factory(`Marco`);
const actionPolo = Factory(`Polo`);

class Test { }

describe(`isType`, () => {
    describe(`Marko`, () => {
        it(`factory`, () => {
            assert.isTrue(isType(actionMarco({}), actionMarco));
        });
        it(`plain`, () => {
            assert.isTrue(isType({ type: `Marco`, payload: {} }, actionMarco));
        });
        it(`factory polo`, () => {
            assert.isFalse(isType(actionPolo({}), actionMarco));
        });
        it(`plain polo`, () => {
            assert.isFalse(isType({ type: `Polo`, payload: {} }, actionMarco));
        });
    });

    describe(`Polo`, () => {
        it(`factory`, () => {
            assert.isTrue(isType({ type: `Polo`, payload: {} }, actionPolo));
        });
        it(`plain`, () => {
            assert.isTrue(isType(actionPolo({}), actionPolo));
        });
        it(`factory marko`, () => {
            assert.isFalse(isType(actionMarco({}), actionPolo));
        });
        it(`plain marko`, () => {
            assert.isFalse(isType({ type: `Marco`, payload: {} }, actionPolo));
        });
    });
});
