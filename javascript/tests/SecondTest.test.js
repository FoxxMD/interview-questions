import { assert, expect } from 'chai';
import { describe, it } from 'mocha';
import { nationArray, squidObj, squidAnswer } from '../resources/resources.js';

/*
 * This set of tests is to test familiarity with some commonly used functions and operations
 *
 * ___________________________________________________
 * 
 * Each `it('...` block in this file is a test you must complete.
 *
 * The test block contains code that must be modified/fixed in order for the test to pass.
 *
 * Each function contains comment(s) that will give you directions on how to fix the code,
 * or what is required for you to do, in order for the test to pass.
 * 
 * You should not should not modify any existing lines of code or test statements (assert, expect, etc...)
 * unless the instructions tell you to do so.
 * 
 * The test statements (assert, expect, etc...) are there to check if your implementation passes the test
 * and otherwise do not affect anything you need to do to take the test IE just ignore them.
 *
 * Note that each test is independent: they are not related or depend on any of the other tests.
 *
 * Also, please do not hesitate to ask for clarification on any directions, questions are encouraged!
 * 
 * PROTIP: In these instructions, the term 'initialize' means the same thing as 'assign this thing with a value'
 *
 * Good Luck!
 *
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
         * Make this test pass without modifying any existing lines of code or test assertions
         * */

        if (Number.isFinite(42)) {
            throw new Error('This will always be thrown');
        }

        expect(true).to.eq(true);
    });

});
