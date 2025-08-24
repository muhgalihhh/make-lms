<?php
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Admin\CourseController as AdminCourseController;
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\InstitutionController as AdminInstitutionController;
use App\Http\Controllers\Admin\TransactionController as AdminTransactionController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('home');

// API routes untuk welcome page
Route::prefix('api/welcome')->name('api.welcome.')->group(function () {
    Route::get('/institutions', [WelcomeController::class, 'getInstitutions'])->name('institutions');
    Route::get('/pro-courses', [WelcomeController::class, 'getProCourses'])->name('pro-courses');
    Route::get('/free-courses', [WelcomeController::class, 'getFreeCourses'])->name('free-courses');
    Route::get('/weather', [WelcomeController::class, 'getWeather'])->name('weather');
    Route::get('/institutions-by-rating', [WelcomeController::class, 'getInstitutionsByRating'])->name('institutions-by-rating');
});

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
require __DIR__ . '/errors.php';

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
            'description' => 'Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator jika Anda yakin ini adalah kesalahan.',
        ])->toResponse(request())->setStatusCode(403);
    }
    
    // Default: halaman tidak ditemukan
    return Inertia::render('errors/404', [
        'code' => '404',
        'title' => 'Halaman Tidak Ditemukan',
        'description' => 'Halaman yang Anda cari tidak dapat ditemukan.',
    ])->toResponse(request())->setStatusCode(404);
});