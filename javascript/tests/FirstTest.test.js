import { assert, expect } from 'chai';
import { describe, it } from 'mocha';
import { generateMaybeNull, generateMaybeNullAnswer } from '../resources/resources.js';

describe('First Test', function() {

    it('testNull', function() {

        /* Declare the variable x and initialize it with a value from the function 'generateMaybeNull()' below.
         * Declare the variable y.
         *
         * If x is null initialize y with the string 'foo'
         * If x is not null initialize y with the string 'bar'
         * */
        generateMaybeNull();

        expect(x).to.eq(generateMaybeNullAnswer(x));
        
    });

});