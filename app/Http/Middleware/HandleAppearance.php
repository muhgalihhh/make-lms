<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleAppearance
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Set default appearance if not set
        if (!$request->cookie('appearance')) {
            $response = $next($request);
            return $response->withCookie('appearance', 'light', 60 * 24 * 365);
        }

        return $next($request);
    }
}
