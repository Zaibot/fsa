const { defineAction } = require(`../es5`);

describe(`Action`, () => {
    it(`type`, () => {
        expect(defineAction('FACTORY').type).toBe('FACTORY');
    });
    it(`maximum one defintion`, () => {
        expect(() => defineAction('FACTORY')).toThrow('action FACTORY has already been defined');
    });
});
