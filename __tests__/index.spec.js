import { checkValid } from "../public/index";
// 'use strict';

// jest.mock("../public/index");

describe('Checks if the input is valid for the IP address',() => {
    it('input must contain content', () => {
        // Setup

        const actualValue = true;
        const expectedValue = true;

        // // Exercise

        // const result = func(actualValue);
        
        // // Verification

        expect(checkValid(actualValue)).toEqual(expectedValue);
    })
})