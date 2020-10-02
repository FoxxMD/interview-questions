<?php

use interview\Helper;

/*
 * This set of tests is to test familiarity with some commonly used functions and operations
 *
 *
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
class SecondTests extends PHPUnit_Framework_TestCase
{
    public function testArray1(){
        /*
         * Using a foreach loop iterate through $array below and add the word 'nation' to each element
         * */

        $array = ['pizza', 'scooby', 'awol'];

        $this->assertEquals($array, ['pizzanation','scoobynation','awolnation']);

    }

    public function testArray2(){
        /*
         * Declare the variable $x and initialize it with the value of the key named 'squidward' from $exampleArray below
         * */
        $exampleArray = Helper::squidArray();

        $this->assertEquals($x, Helper::squidAnswer());
    }

    public function testOperator(){
        /*
         * Fix the code below so that the test passes
         *
         * You may only change one line of code and may not modify any strings
         * */

        $string1 = 'peoplesRepublicOfKorea';
        $string2 = 'people';

        if(strpos($string2, $string1) !== false){
            echo 'Found it!';
        } else {
            echo 'Not Found';
        }

        $this->expectOutputString('Found it!');
    }

	public function testOperator2()
	{
		/*
		 * Make $z FALSE without modifying any values
		 */
		$z = '0123' == 123;

		$this->assertFalse($z);
	}

    public function testHandling(){
    	/*
         * Make this test pass without modifying any existing lines of code
         * */

        if(is_numeric(42)){
            throw new \RuntimeException('This will always be thrown');
        }


	    // test will pass if this function is executed
        $this->anything();

    }

}