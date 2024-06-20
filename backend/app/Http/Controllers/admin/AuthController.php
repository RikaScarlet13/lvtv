<?php 

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            if (in_array($user->role, ['super_admin', 'admin', 'streamer'])) {
                $token = $user->createToken('admin-token', ['role:admin'])->plainTextToken;
                return response()->json(['token' => $token, 'user' => $user]);
            } else {
                return response()->json(['message' => 'Unauthorized'], 403);
            }
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}
