import { assert } from 'chai';
import { describe, it } from 'mocha';
import { nationArray, squidObj, squidAnswer } from '../resources/resources.js';

/*
 * This set of tests is to test familiarity with some commonly used functions and operations
 * */
describe('Second Test', function() {

    it('testArray1', function() {

        /*
         * Add the elements of array to resultArray, appending the word 'nation' to each element
         * */

        const array = ['pizza', 'scooby', 'awol'];
        let resultArray = [];

        assert.deepEqual(nationArray(), resultArray);

    });

    it('testArray2', function() {

        /*
         * Declare the variable x and initialize it with the value of the key named 'squidward' from exampleObject below
         * */
        const exampleObject = squidObj();

        assert.equal(squidAnswer(), x);

    });

    it('testOperator', function() {

        /*
         * Fix the code below so that the test passes
         *
         * You may only change one line of code and may not modify any strings
         * */
        let output = '';

        const string1 = 'peoplesOfTheWorld';
        const string2 = 'people';

        if (string2.includes(string1) === true) {
            output = 'Found it!';
        } else {
            output = 'Not Found';
        }

        assert.equal(output, 'Found it!');

    });

    it('testOperator2', function() {

        /*
         * Make z FALSE without modifying any values
         * */
        let z = '0123' == 123;

        assert.isFalse(z);

    });

    it('testHandling', function() {

        /*
         * Make this test pass without modifying any existing lines of code
         * */
        if (Number.isFinite(42)) {
            throw new Error('This will always be thrown');
        }

        // test will pass if this function is executed

    });

});
