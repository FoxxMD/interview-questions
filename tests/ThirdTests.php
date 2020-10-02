<?php


/*
 * These tests are to see how you perform with algorithms. The code you write is more important than the answer you get.
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
class ThirdTests extends PHPUnit_Framework_TestCase
{

    public function testAlgo1(){
        /*
         * Given the array below:
         *
         * 1. Count the number of occurrences of non-zero elements in $array below and initialize a new variable $x with that value
         * 2. Modify $array so that non-zero elements appear first
         * */

        $array = [13,5,0,8,0,22,0,0,9,15,44];


        $this->assertEquals($x, 7);
        $this->assertEquals(array_splice($array,7), [0, 0, 0, 0]);
    }

    public function testAlgo2(){
        /*
         * Implement the class function power(), described below
         * */

        $this->assertEquals($this->power(3,4) , 81);

    }

    /**
     * Takes a base and exponent value and returns the base to the power of the exponent
     * // more information https://www.mathsisfun.com/exponent.html
     *
     * @param $base int The base number
     * @param $exponent int The exponent the base number is raised to
     * @return int
     */
    private function power($base, $exponent){

    }
}