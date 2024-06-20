<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Foundation\Http\MiddlewarePriority;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {

         // Adding your web middleware group here
         $middleware->group('web', [
            // Your web middleware here
        ]);
        // Adding your api middleware group here
        $middleware->group('api', [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ]);
        // Adding the 'role' middleware
        $middleware->group('role', [
            \App\Http\Middleware\RoleMiddleware::class,
        ]);


        
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
