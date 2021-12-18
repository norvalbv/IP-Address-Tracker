// first test
const assert = require('assert');
const func = require('../index');

describe('Checks if the input is valid for the IP address',() => {
    it('input must contain content',() => {
        // Setup

        const actualValue = true;
        const expectedValue = true;

        // Exercise

        const result = func(actualValue);
        
        // Verification

        assert(result, expectedValue)
    })
})