<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;





Route::middleware('auth:sanctum')->group(function () {
    // Example authenticated route
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/auth/google/redirect', [AuthController::class, 'redirectToGoogle']);
    Route::get('/auth/google/callback', [AuthController::class, 'handleGoogleCallback']);
    Route::middleware(['auth:sanctum', 'role:super_admin,admin,streamer'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index']);
    });});

// Public routes
Route::get('/public-route', function () {
    return response()->json(['message' => 'This is a public route']);
});