<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function dashboard(Request $request): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'user' => $request->user(),
        ]);
    }
}
