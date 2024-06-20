<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;

// class DashboardController extends Controller
// {
//     public function index()
//     {
//         // Logic for fetching dashboard data or rendering the dashboard view
//         return view('dashboard.index');
//     }
// }



namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Logic for displaying admin dashboard
        return view('admin.dashboard');
    }
}
