const { assert } = require(`chai`);
const { Factory, isTypeOneOf } = require(`../es5`);

const actionMarco = Factory(`Marco`);
const actionPolo = Factory(`Polo`);
const actionTobias = Factory(`Tobias`);

describe(`isTypeOneOf`, () => {
    describe(`Marko/Polo`, () => {
        it(`marco`, () => {
            assert.isTrue(isTypeOneOf(actionMarco({}), actionMarco, actionPolo));
        });
        it(`polo`, () => {
            assert.isTrue(isTypeOneOf(actionPolo({}), actionMarco, actionPolo));
        });
        it(`tobias`, () => {
            assert.isFalse(isTypeOneOf(actionTobias({}), actionMarco, actionPolo));
        });
    });
    describe(`Polo/Tobias`, () => {
        it(`marco`, () => {
            assert.isFalse(isTypeOneOf(actionMarco({}), actionPolo, actionTobias));
        });
        it(`polo`, () => {
            assert.isTrue(isTypeOneOf(actionPolo({}), actionPolo, actionTobias));
        });
        it(`tobias`, () => {
            assert.isTrue(isTypeOneOf(actionTobias({}), actionPolo, actionTobias));
        });
    });
});
