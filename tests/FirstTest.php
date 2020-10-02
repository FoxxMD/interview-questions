<?php

use interview\Cat;
use interview\Dog;
use interview\Helper;

/*
 * Each public function in this file is a TEST in a PHPUnit suite.
 * The code block for each function contains code that must be modified/fixed in order for the test to pass.
 * Each function contains comment(s) that will give you directions on how to fix the code in order for the test to pass.
 *
 * Please note that each test is independent -- they are not related or depend on any of the other tests.
 *
 * Also, please do not hesitate to ask for clarification on any directions, questions are encouraged!
 *
 * Good Luck!
 *
 * */
class FirstTest extends PHPUnit_Framework_TestCase
{
    public function testAssign(){
        // Declare the variable $x and initialize it with string 'foo'

        $this->assertEquals('foo', $x);
    }

    public function testNull(){
        /*
         * Declare the variable $x and initialize it with a value from the function 'Helper::generateMaybeNull()' below.
         * Declare the variable $y.
         *
         * If $x is null initialize $y with the string 'foo'
         * If $x is not null initialize $y with the string 'bar'
         * */

        Helper::generateMaybeNull();

        $this->assertEquals(Helper::testNullAnswer($x), $y);
    }

    public function testArray1(){
        /*
         * Declare the variable $x and initialize it with the 4th element from the array below
         * */
        $array = array('cat','dog','penguin','wompwomp','gasoline');

        $this->assertEquals(Helper::testArray1Answer(), $x);
    }

    public function testArray2(){
        /*
         * In a separate statement add the number 4 to the end of $array below
         * */

        $array = array('cat','dog','penguin','wompwomp','gasoline');

        $this->assertCount(6, $array);
        $this->assertEquals(4, end($array));
    }

    public function testClass1(){
        /*
         * Instantiate the class Dog to the variable $y
         * Then declare the variable $x and initialize it with the value of the property 'age' from the Dog instance you created
         * */

        $this->assertEquals(Dog::ageAnswer(), $x);
    }

    public function testClass2(){
        /*
         * 1. Declare the variable $name and initialize it with a string of your choice.
         * 2. Declare the variable $x and instantiate it with the class Cat, providing the variable $name as an argument
         * 3. Add 3 to the property 'age' on the Cat instance.
         * */

        $this->assertEquals(Cat::ageAnswer(), $x->age);
        $this->assertEquals($x->name, $name);
    }
}