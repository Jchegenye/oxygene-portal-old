<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = Carbon::now();
        $createdDate = clone($date);

        //Register users
        DB::table('users')->delete();
        DB::table('users')->insert(array (
            0 => 
            array (
                'first_name' => "Jackson",
                'last_name' => "Chegenye",
                'email' => "jackson.chegenye@oxygene.co.ke",
                'password' =>  Hash::make('111'),
                'nickname' => "jchegenye",
                'role_id' => 1, //Super Admin
                'agreement' => 1,
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
            1 => 
            array (
                'first_name' => "Johnson Gitonga",
                'last_name' => "Johnson Gitonga",
                'email' => "johnson.gitonga@oxygene.co.ke",
                'password' =>  Hash::make('111'),
                'nickname' => Str::lower(head(explode(' ', trim('johnson')))),
                'role_id' => 2, //Admin
                'agreement' => 1,
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
            3 => 
            array (
                'first_name' => "Alfred",
                'last_name' => "Maina",
                'email' => "alfred.maina@oxygene.co.ke",
                'password' =>  Hash::make('111'),
                'nickname' => Str::lower(head(explode(' ', trim('alfie')))),
                'role_id' => 3, //Employee
                'agreement' => 1,
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
            4 => 
            array (
                'first_name' => "Kyeti",
                'last_name' => "C",
                'email' => "jtechinfo3@gmail.com",
                'password' =>  Hash::make('111'),
                'nickname' => Str::lower(head(explode(' ', trim('kyeti')))),
                'role_id' => 4, //Client
                'agreement' => 1,
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
        ));

        //Register user profiles
        DB::table('profiles')->delete();
        DB::table('profiles')->insert(array (
            0 => 
            array (
                'user_id' => 1,
                'phone_number' => "+254711494289",
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
            1 => 
            array (
                'user_id' => 2,
                'phone_number' => "+254721725371",
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
            3 => 
            array (
                'user_id' => 3,
                'phone_number' => "+254705919235",
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
            4 => 
            array (
                'user_id' => 4,
                'phone_number' => "+254722393022",
                'created_at' => $createdDate,
                'updated_at' => $createdDate
            ),
        ));
    }
}
