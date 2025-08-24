<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display the user's profile.
     */
    public function profile(Request $request): Response
    {
        return Inertia::render('User/Profile', [
            'user' => $request->user(),
        ]);
    }
}