const { assert } = require(`chai`);
const { Action, Factory } = require(`../es5`);

class Test { }

describe(`Action`, () => {
    it(`type`, () => {
        assert.equal(Action('FACTORY').type, 'FACTORY');
    });
    it(`maximum one defintion`, () => {
        assert.throw(() => Action('FACTORY'), 'action FACTORY has already been defined')
    });
});
