<?php

require '../resources/Helper.php';
require '../resources/ExampleClasses.php';
/*
 * This set of tests is stupidly easy.
 * It's mostly a sanity check to make sure you know how to do basic things with PHP.
 *
 * */
class FirstTests extends PHPUnit_Framework_TestCase
{
    public function testAssign(){
        // Initialize the variable x and assign the string 'foo' to it

        $this->assertEquals($x, 'foo');
    }

    public function testNull(){
        /*
         * Initialize the variable x and assign a value from the function 'Helper::generateMaybeNull()' below
         *
         * If x is null initialize the variable y with the string 'foo'
         * If x is not null initialize the variable y with the string 'bar'
         * */

        Helper::generateMaybeNull();

        $this->assertEquals($y, Helper::nullAssertValue($x));
    }

    public function testArray1(){
        /*
         * Access the value 'wompwomp' in the array below and assign it to a variable x
         * */

        $array = array('cat','dog','penguin','wompwomp','gasoline');

        $this->assertEquals($x, 'wompwomp');
    }

    public function testArray2(){
        /*
         * In a separate statement add the number 4 to the end of the array below
         * */

        $array = array('cat','dog','penguin','wompwomp','gasoline');

        $this->assertEquals(count($array), 6);
        $this->assertEquals($array[5], 4);
    }

    public function testClass1(){
        /*
         * Instantiate the class dog and assign its age property to a variable x
         * */

        $this->assertEquals($x, 5);
    }

    public function testClass2(){
        /*
         * 1. Initialize the variable 'name' with a string
         * 2. Instantiate the class Cat and provide the variable 'name' as an argument, assign it to the variable 'x'
         * 3. Add 3 to the member 'age' in the Cat instance
         * */

        $this->assertEquals($x->age, 10);
        $this->assertEquals($name, $x->name);
    }
}