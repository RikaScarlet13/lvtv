<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController as AdminAuthController;

// Public routes
Route::get('/public-route', function () {
    return response()->json(['message' => 'This is a public route']);
});

// Google OAuth routes
Route::get('auth/google', [AuthController::class, 'redirectToGoogle']);
Route::get('auth/callback/google', [AuthController::class, 'handleGoogleCallback']);

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::middleware(['role:super_admin,admin,streamer'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index']);
    });

    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);
});

Route::post('/admin/login', [AdminAuthController::class, 'login']);
Route::middleware(['auth:sanctum', 'role:super_admin,admin'])->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    // Add more admin-specific routes here
});