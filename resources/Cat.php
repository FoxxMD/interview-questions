<?php


namespace interview;


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