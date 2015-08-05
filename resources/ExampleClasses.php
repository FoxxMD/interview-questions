<?php

/**
 * Created by IntelliJ IDEA.
 * User: mduncan
 * Date: 8/5/15
 * Time: 4:51 PM
 */
class Dog {

 public $age = 5;

}

class Cat {

    public $name;
    public $age = 7;

    /**
     * @param $name
     */
    public function __construct($name){
        $this->name = $name;
    }

}