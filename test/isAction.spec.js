const { defineAction, isAction } = require(`../es5`);

const actionMarco = defineAction(`Marco`);
const actionPolo = defineAction(`Polo`);

class Test {}

describe(`isAction`, () => {
    it(`{}`, () => {
        expect(isAction({})).toBe(false);
    });
    describe(`payload`, () => {
        it(`object`, () => {
            expect(isAction({ type: `test`, payload: {} })).toBe(true);
        });
        it(`unspecified`, () => {
            expect(isAction({ type: `test` })).toBe(false);
        });
        it(`undefined`, () => {
            expect(isAction({ type: `test`, payload: undefined })).toBe(false);
        });
        it(`error`, () => {
            expect(isAction({ type: `test`, payload: Error() })).toBe(false);
        });
        it(`class`, () => {
            expect(isAction({ type: `test`, payload: new Test() })).toBe(false);
        });
    });
    describe(`error`, () => {
        it(`error`, () => {
            expect(isAction({ type: `test`, payload: Error(), error: true })).toBe(true);
        });
        it(`object error`, () => {
            expect(isAction({ type: `test`, payload: {}, error: true })).toBe(true);
        });
        it(`class error`, () => {
            expect(isAction({ type: `test`, payload: new Test(), error: true })).toBe(false);
        });
    });
    describe(`marko`, () => {
        it(`valid`, () => {
            expect(isAction(actionMarco({}))).toBe(true);
        });
    });
    describe(`polo`, () => {
        it(`valid`, () => {
            expect(isAction(actionPolo({}))).toBe(true);
        });
    });
});
