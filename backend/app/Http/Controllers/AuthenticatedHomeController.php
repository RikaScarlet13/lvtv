<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthenticatedHomeController extends Controller
{
    public function index()
    {
        return view('authenticated-home');
    }
}
