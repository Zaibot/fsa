const { defineAction, isTypeOneOf } = require(`../es5`);

const actionMarco = defineAction(`Marco`);
const actionPolo = defineAction(`Polo`);
const actionTobias = defineAction(`Tobias`);

describe(`isTypeOneOf`, () => {
    describe(`Marko/Polo`, () => {
        it(`marco`, () => {
            expect(isTypeOneOf(actionMarco({}), actionMarco, actionPolo)).toBe(true);
        });
        it(`polo`, () => {
            expect(isTypeOneOf(actionPolo({}), actionMarco, actionPolo)).toBe(true);
        });
        it(`tobias`, () => {
            expect(isTypeOneOf(actionTobias({}), actionMarco, actionPolo)).toBe(false);
        });
    });
    describe(`Polo/Tobias`, () => {
        it(`marco`, () => {
            expect(isTypeOneOf(actionMarco({}), actionPolo, actionTobias)).toBe(false);
        });
        it(`polo`, () => {
            expect(isTypeOneOf(actionPolo({}), actionPolo, actionTobias)).toBe(true);
        });
        it(`tobias`, () => {
            expect(isTypeOneOf(actionTobias({}), actionPolo, actionTobias)).toBe(true);
        });
    });
});
