<?php
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Admin\CourseController as AdminCourseController;
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\InstitutionController as AdminInstitutionController;
use App\Http\Controllers\Admin\TransactionController as AdminTransactionController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

// Dashboard untuk semua user yang login
Route::get('/dashboard', function () {
    $user = auth()->user();

    // Redirect berdasarkan role
    if ($user->isAdmin()) {
        return redirect()->route('admin.dashboard');
    }

    return redirect()->route('user.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Routes untuk Admin
Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    
    // User Management
    Route::resource('users', AdminUserController::class);
    
    // Course Management
    Route::resource('courses', AdminCourseController::class);
    
    // Category Management
    Route::resource('categories', AdminCategoryController::class);
    
    // Institution Management
    Route::resource('institutions', AdminInstitutionController::class);
    
    // Transaction Management
    Route::resource('transactions', AdminTransactionController::class)->except(['create', 'store', 'edit', 'update']);
    Route::patch('/transactions/{transaction}/status', [AdminTransactionController::class, 'updateStatus'])->name('transactions.update-status');
});

// Routes untuk User
Route::middleware(['auth', 'verified', 'role:user'])->prefix('user')->name('user.')->group(function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
    Route::get('/profile', [UserController::class, 'profile'])->name('profile');
});

// Profile routes (untuk semua user)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/settings.php';

// Error pages for testing (remove in production)
Route::prefix('errors')->name('errors.')->group(function () {
    Route::get('/404', function () {
        return Inertia::render('errors/404');
    })->name('404');
    
    Route::get('/403', function () {
        return Inertia::render('errors/403');
    })->name('403');
    
    Route::get('/401', function () {
        return Inertia::render('errors/401');
    })->name('401');
    
    Route::get('/500', function () {
        return Inertia::render('errors/500');
    })->name('500');
    
    Route::get('/419', function () {
        return Inertia::render('errors/419');
    })->name('419');
    
    Route::get('/429', function () {
        return Inertia::render('errors/429');
    })->name('429');
    
    Route::get('/503', function () {
        return Inertia::render('errors/503');
    })->name('503');
    
    Route::get('/422', function () {
        return Inertia::render('errors/422', [
            'errors' => [
                'email' => ['Email harus valid'],
                'password' => ['Password minimal 8 karakter'],
            ]
        ]);
    })->name('422');
    
    Route::get('/400', function () {
        return Inertia::render('errors/400');
    })->name('400');
    
    Route::get('/408', function () {
        return Inertia::render('errors/408');
    })->name('408');
    
    Route::get('/502', function () {
        return Inertia::render('errors/502');
    })->name('502');
    
    Route::get('/504', function () {
        return Inertia::render('errors/504');
    })->name('504');
});

// Fallback route untuk menangani semua URL yang tidak terdaftar
// Route ini harus ditempatkan di akhir file routes
Route::fallback(function () {
    // Cek apakah user sudah login
    if (!auth()->check()) {
        return Inertia::render('errors/401', [
            'code' => '401',
            'title' => 'Akses Tidak Sah',
            'description' => 'Anda harus masuk terlebih dahulu untuk mengakses halaman ini.',
        ])->toResponse(request())->setStatusCode(401);
    }
    
    // Cek apakah user memiliki akses ke halaman yang diminta
    $user = auth()->user();
    $path = request()->path();
    
    // Jika mencoba mengakses area admin tanpa permission
    if (str_starts_with($path, 'admin') && !$user->isAdmin()) {
        return Inertia::render('errors/403', [
            'code' => '403',
            'title' => 'Akses Dilarang',
            'description' => 'Anda tidak memiliki izin untuk mengakses halaman ini.',
        ])->toResponse(request())->setStatusCode(403);
    }
    
    // Default: halaman tidak ditemukan
    return Inertia::render('errors/404', [
        'code' => '404',
        'title' => 'Halaman Tidak Ditemukan',
        'description' => 'Halaman yang Anda cari tidak dapat ditemukan.',
    ])->toResponse(request())->setStatusCode(404);
});