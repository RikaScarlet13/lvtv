<?php

// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });



use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\AuthenticatedHomeController;
use App\Http\Controllers\DashboardController;

// Landing page route
Route::get('/', [LandingPageController::class, 'index'])->name('landing');

// Authenticated routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/home', [AuthenticatedHomeController::class, 'index'])->name('authenticated-home');
    Route::middleware(['role:super_admin,admin,streamer'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    });
});
