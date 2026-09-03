<?php

namespace interview;
use Faker;


/**
 * Created by IntelliJ IDEA.
 * User: mduncan
 * Date: 8/5/15
 * Time: 4:33 PM
 */
class Helper
{

    protected array $array1;

    public function __construct() {
        $faker = Faker\Factory::create();
        $this->array1 = [$faker->name(),$faker->name(),$faker->name(),$faker->name(),$faker->name()];
    }

    public static function generateMaybeNull(): ?int {
        $rand = mt_rand();

        return $rand%2 === 0 ? null : $rand;
    }

    public static function testNullAnswer(?int $val){
        return $val === null ? 'foo' : 'bar';
    }

    public static function squidArray(){
        return [
            'sandy' => 'squirrel',
            'sponge' => 'bob',
            'gary' => 'snail',
            'squidward' => 'clarinet',
            'plankton' => 'crabby patty'
        ];
    }

    public static function squidAnswer(){
        return 'clarinet';
    }

	public static function algo1Count()
	{
    	return 7;
	}

	public static function nationArray()
	{
		return ['pizzanation','scoobynation','awolnation'];
	}

    public function testArray1() {
    	return $this->array1;
	}

	public function testArray1Answer() {
    	return $this->array1[3];
	}
}