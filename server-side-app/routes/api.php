<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = DB::table('users')
                ->join('roles', 'users.role_id', '=', 'roles.id')
                ->where('users.id',$request->user()->id)
                ->get();
    return $user;
});

// register
Route::post('register', 'Auth\RegisterController@register')->name('register');

// login
Route::post('login', function(Request $request){
    $credentials = $request->only('email', 'password');

    if(! auth()->attempt($credentials)){
        throw ValidationException::withMessages([
            'email' => 'Invalid credentials'
        ]);
    }

    $request->session()->regenerate();

    return response()->json([
        'status' => 'success',
        'message' => 'Your credentials are correct'
    ], 201);
});

// logout
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', function(Request $request){
        auth()->guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(null, 201);
    });
});