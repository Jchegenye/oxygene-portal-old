<?php

// AuthController.php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'first_name' => 'required',
            'email' => 'required|unique:users,email|email',
            'password' => 'required'
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'nickname' => Str::lower(head(explode(' ', trim($request->first_name)))),
            'role_id' => (int)4, //client
            'agreement' => $request->agreement
        ]);

        // $profile = Profile::create([
        //     'phone_number' => $request->phone_number,
        //     'user_id' => $user->id
        // ]);
  
        return response([
            $user,
            'message' => 'Your account has been created',
        ], 201);
    }
}