const { defineAction } = require(`../es5`);

const actionMarco = defineAction(`Marco`);

describe(`Factory`, () => {
    it(`type`, () => {
        expect(actionMarco.type).toBe('Marco');
    });
    it(`create`, () => {
        expect(actionMarco({})).toEqual({ type: 'Marco', payload: {} });
    });
    it(`error`, () => {
        const err = Error('testing');
        expect(actionMarco.error(err)).toEqual({ type: 'Marco', error: true, payload: err });
    });
    it(`error plain`, () => {
        const err = { message: 'testing' };
        expect(actionMarco.error(err)).toEqual({ type: 'Marco', error: true, payload: err });
    });
});
