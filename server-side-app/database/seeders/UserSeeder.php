<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        DB::table('users')->insert(array (
            0 => 
            array (
                'name' => "Jackson Chegenye",
                'email' => "jackson.chegenye@oxygene.co.ke",
                'password' =>  Hash::make('111'),
                'nickname' => "jchegenye",
                'phone_number' => "+254711494289",
                'role_id' => 1, //Super Admin
                'agreement' => 1,
            ),
            1 => 
            array (
                'name' => "Johnson Gitonga",
                'email' => "johnson.gitonga@oxygene.co.ke",
                'password' =>  Hash::make('111'),
                'nickname' => "johnson",
                'phone_number' => "+254721725371",
                'role_id' => 2, //Admin
                'agreement' => 1,
            ),
            3 => 
            array (
                'name' => "Alfred Maina",
                'email' => "alfred.maina@oxygene.co.ke",
                'password' =>  Hash::make('111'),
                'nickname' => "alfie",
                'phone_number' => "+254705919235",
                'role_id' => 3, //Client
                'agreement' => 1,
            ),
        ));
    }
}
