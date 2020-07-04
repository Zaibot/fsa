const { defineAction, isError } = require(`../es5`);

class Test {}

describe(`isError`, () => {
    it(`{}`, () => {
        expect(isError({})).toBe(false);
    });
    describe(`payload`, () => {
        it(`object`, () => {
            expect(isError({ type: `test`, payload: {} })).toBe(false);
        });
        it(`error`, () => {
            expect(isError({ type: `test`, payload: Error() })).toBe(false);
        });
    });
    describe(`error`, () => {
        it(`error`, () => {
            expect(isError({ type: `test`, payload: Error(), error: true })).toBe(true);
        });
        it(`object error`, () => {
            expect(isError({ type: `test`, payload: {}, error: true })).toBe(true);
        });
        it(`class error`, () => {
            expect(isError({ type: `test`, payload: new Test(), error: true })).toBe(false);
        });
    });
});
