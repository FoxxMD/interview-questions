<?php

/*
 * This set of tests is to test familiarity with some commonly used functions and operations
 *
 * */
use interview\Helper;

class SecondTests extends PHPUnit_Framework_TestCase
{
    public function testArray1(){
        /*
         * Use a for loop, iterate through the array below and add the word 'nation' to each element
         * */

        $array = ['pizza', 'scooby', 'awol'];


        $this->assertEquals($array, ['pizzanation','scoobynation','awolnation']);

    }

    public function testArray2(){
        /*
         * Initialize the variable x and assign the value of the key named 'squidward' from the array below
         * */
        $array = Helper::squidArray();


        $this->assertEquals($x, Helper::squidAnswer());
    }

    public function testOperator(){
        /*
         * Fix the code below so that the test passes
         *
         * You may only change one line of code
         * */

        $string1 = 'peoplesRepublicOfKorea';
        $string2 = 'people';

        if(strpos($string1, $string2)){
            echo 'Found it!';
        } else {
            echo 'Not Found';
        }

        $this->expectOutputString('Found it!');
    }

    public function testHandling(){

        /*
         * Make this test pass without modifying any of the lines between the commented lines below
         * */

        // ********************
        $x = 42;
        $y = mt_rand();
        $z = $x + $y;
        if(is_numeric($z)){
            throw new \RuntimeException();
        }
        // ********************

        $this->anything();

    }

    public function testRef(){
        /*
         * Without modifying the variable 'a' make this test pass
         * */

        $a = 42;

        $this->assertEquals($a, 13);

    }

}