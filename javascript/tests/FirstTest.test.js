import { assert, expect } from 'chai';
import { describe, it } from 'mocha';
import { generateMaybeNull, generateMaybeNullAnswer, createHelper, Dog, Cat } from '../resources/resources.js';


/*
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

describe('First Test', function() {

    it('testNull', function() {

        /* Declare the variable x and initialize it with a value from the function 'generateMaybeNull()' below.
         * Declare the variable y.
         *
         * If x is null initialize y with the string 'foo'
         * If x is not null initialize y with the string 'bar'
         * */
        generateMaybeNull();

        expect(y).to.eq(generateMaybeNullAnswer(x));

    });

    it('testAssign', function() {

        // Declare the variable x and initialize it with string 'foo'

        assert.equal(x, 'foo');

    });

    it('testArray1', function() {

        const helper = createHelper();
        /*
         * Declare the variable x and initialize it with the 4th element from the array below
         * */
        const array = helper.testArray1();

        assert.equal(helper.testArray1Answer(), x);

    });

    it('testArray2', function() {

        /*
         * In a separate statement add the number 4 to the end of the array below
         * */

        const array = ['cat', 'dog', 'penguin', 'wompwomp', 'gasoline'];

        assert.lengthOf(array, 6);
        assert.equal(array.at(-1), 4);

    });

    it('testClass1', function() {

        /*
         * Declare the variable y and initialize it with a new instance of the 'Dog' class
         * Then declare the variable x and initialize it with the value of the property 'age' from the Dog instance you created
         * */

        assert.equal(x, Dog.ageAnswer());

    });

    it('testClass2', function() {

        /*
         * 1. Declare the variable name and initialize it with a string of your choice.
         * 2. Declare the variable x and initialize it with a new instance of the 'Cat' class, providing the variable name as an argument to the class constructor
         * 3. Add 3 to the property 'age' on the Cat instance.
         * */

        assert.equal(x.age, Cat.ageAnswer());
        assert.equal(x.name, name);

    });

});