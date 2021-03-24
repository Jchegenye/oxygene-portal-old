<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() 
    {
        DB::table('roles')->delete();

        DB::table('roles')->insert(array (
            0 => 
            array (
                'label' => "Super Admin",
                'description' => "A super admin user has the ability to manage all the system's functionalities.",
            ),
            1 => 
            array (
                'label' => "Admin",
                'description' => "An admin has the ability to manage a few of the system's functionalities.",
            ),
            2 => 
            array (
                'label' => "Employee",
                'description' => "An employee has the ability to manage ...",
            ),
        ));

    }
}
