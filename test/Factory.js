const { assert } = require(`chai`);
const { Factory } = require(`../es5`);

const actionMarco = Factory(`Marco`);
const actionPolo = Factory(`Polo`);

describe(`Factory`, () => {
    it(`type`, () => {
        assert.equal(actionMarco.type, 'Marco');
    });
    it(`create`, () => {
        assert.deepEqual(actionMarco({}), { type: 'Marco', payload: {} });
    });
    it(`error`, () => {
        const err = Error('testing');
        assert.deepEqual(actionMarco.error(err), { type: 'Marco', error: true, payload: err });
    });
    it(`error plain`, () => {
        const err = { message: 'testing' };
        assert.deepEqual(actionMarco.error(err), { type: 'Marco', error: true, payload: err });
    });
});
