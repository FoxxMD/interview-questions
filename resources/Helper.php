<?php

/**
 * Created by IntelliJ IDEA.
 * User: mduncan
 * Date: 8/5/15
 * Time: 4:33 PM
 */
class Helper
{

    public static function generateMaybeNull(){
        $rand = rand();

        return $rand%2 === 0 ? null : $rand;
    }

    public static function nullAssertValue($val){
        return is_null($val) ? 'foo' : 'bar';
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
}