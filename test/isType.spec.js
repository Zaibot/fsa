const { defineAction, isType } = require(`../es5`);

const actionMarco = defineAction(`Marco`);
const actionPolo = defineAction(`Polo`);

describe(`isType`, () => {
    describe(`Marko`, () => {
        it(`factory`, () => {
            expect(isType(actionMarco({}), actionMarco)).toBe(true);
        });
        it(`plain`, () => {
            expect(isType({ type: `Marco`, payload: {} }, actionMarco)).toBe(true);
        });
        it(`factory polo`, () => {
            expect(isType(actionPolo({}), actionMarco)).toBe(false);
        });
        it(`plain polo`, () => {
            expect(isType({ type: `Polo`, payload: {} }, actionMarco)).toBe(false);
        });
    });

    describe(`Polo`, () => {
        it(`factory`, () => {
            expect(isType({ type: `Polo`, payload: {} }, actionPolo)).toBe(true);
        });
        it(`plain`, () => {
            expect(isType(actionPolo({}), actionPolo)).toBe(true);
        });
        it(`factory marko`, () => {
            expect(isType(actionMarco({}), actionPolo)).toBe(false);
        });
        it(`plain marko`, () => {
            expect(isType({ type: `Marco`, payload: {} }, actionPolo)).toBe(false);
        });
    });
});
