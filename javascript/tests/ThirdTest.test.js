import { assert } from 'chai';
import { describe, it } from 'mocha';
import { algo1Count } from '../resources/resources.js';

/**
 * Takes a base and exponent value and returns the base to the power of the exponent
 * more information: https://www.mathsisfun.com/exponent.html
 *
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {

}

/*
 * These tests are to see how you handle multi-step problems and see how you work through a problem.
 *
 * The code you write is more important than the answer you get.
 * */
describe('Third Test', function() {

    it('testAlgo1', function() {

        /*
         * Given the array below:
         *
         * 1. Count the number of occurrences of non-zero elements in array below and initialize a new variable x with that value
         * 2. Modify array so that non-zero elements appear first
         * */

        const array = [13, 5, 0, 8, 0, 22, 0, 0, 9, 15, 44];

        assert.equal(algo1Count(), x);
        assert.deepEqual([0, 0, 0, 0], array.splice(algo1Count()));

    });

    it('testAlgo2', function() {

        /*
         * Implement the function power(), described above
         * */

        assert.equal(power(3, 0), 1);
        assert.equal(power(3, 1), 3);
        assert.equal(power(3, 4), 81);

    });

});
