import { assert, expect } from 'chai';
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

/**
 * Takes a list of objects of the same type and a specific key name on the object
 * 
 * It returns a new object whose keys are the distinct values of the key names from all objects in the list
 * And the respective value for each key is a list of objects who had that same key-value
 * 
 * EX const myList = [{status: 'foo', y: 1},{status: 'bar', y: 2},{status: 'foo', y: 3}]
 * groupBy(myList, 'status') => {foo: [{status: 'foo', y: 1},{status: 'foo', y: 3}], bar: [{status: 'bar', y: 2}]}
 *
 * @param {array} list
 * @param {string} key
 * @returns {object}
 */
function groupBy(list, key) {

}

/**
 * Takes a URL querystring and parses it into an object
 * 
 * All properties should be a key-value except when a key is repeated in which case it should be an array
 * 
 * EX `?name=fun&age=3&tag=foo&tag=bar`
 * Return => {name: 'fun', age: '3, tag: ['foo','bar']}
 *
 * @param {string} q
 * @returns {object}
 */
function parseQueryString(q) {

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

        assert.equal(x, algo1Count());
        assert.deepEqual(array.splice(algo1Count()), [0, 0, 0, 0]);

    });

    it('testAlgo2', function() {

        /*
         * Implement the function power(), described above
         * */

        assert.equal(power(3, 0), 1);
        assert.equal(power(3, 1), 3);
        assert.equal(power(3, 4), 81);

    });

    it('testAlgo3', function() {
        
        /*
         * Implement the `groupBy` function above
         * 
         */
        const myList = [
            {
                status: 'pending',
                valA: 1,
                valB: 'fun'
            },
            {
                status: 'updated',
                valA: 0,
                valB: 'cool'
            },
            {
                status: 'pending',
                valA: 'x',
                valB: 'neat'
            },
            {
                status: 'failed',
                valY: 'texas',
                valB: 12
            },
        ];

        const grouped = groupBy(myList, 'status');

        expect(grouped.pending).to.exist;
        expect(grouped.pending).to.deep.include.members([myList[0],myList[2]]);
        expect(grouped.updated).to.exist;
        expect(grouped.failed).to.exist;
        expect(grouped.failed).to.deep.include.members([myList[3]]);

    });

    it('testAlgo4', function() {

        /*
         * Implement the `parseQueryString` function above
         *
         * Then, get the querystring from the provided URL object and parse it with your implementation
         * 
         */

        const myUrl = new URL('https://example.com/a/cool/path?foo=bar&fun=yes&places=atlanta&places=chicago');
        const parsed = parseQueryString(); // pass query string here

        expect(parsed.foo).eq('bar');
        expect(parsed.fun).eq('yes');
        expect(parsed.places).to.include.members(['atlanta','chicago']);
    });

});
