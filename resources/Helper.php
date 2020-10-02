<?php

namespace interview;

/**
 * Created by IntelliJ IDEA.
 * User: mduncan
 * Date: 8/5/15
 * Time: 4:33 PM
 */
class Helper
{

    public static function generateMaybeNull(){
        $rand = mt_rand();

        return $rand%2 === 0 ? null : $rand;
    }

    public static function testNullAnswer($val){
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

	public static function testArray1Answer() {
    	return 'wompwomp';
	}
}