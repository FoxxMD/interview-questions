<?php


namespace interview;


class Cat {

	public string $name;
	public int $age = 7;

	/**
	 * @param $name
	 */
	public function __construct(string $name){
		$this->name = $name;
	}

	public static function ageAnswer()
	{
		return 10;
	}
}