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
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// User routes (protected by auth middleware)
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('User/Dashboard');
    })->name('dashboard');
<<<<<<< HEAD

    // User Profile
    Route::get('/profile', function () {
        return Inertia::render('User/Profile');
    })->name('profile');

    // User Courses
    Route::get('/my-courses', function () {
        return Inertia::render('User/MyCourses');
    })->name('my-courses');

    // User Transactions
    Route::get('/transactions', function () {
        return Inertia::render('User/Transactions');
    })->name('transactions');
=======
    
    Route::get('/profile', [UserController::class, 'profile'])->name('profile');
>>>>>>> f0bc731136958cb86ff86f928715cea0a676a6f0
});

// Admin routes (protected by auth and admin middleware)
Route::middleware(['auth', 'admin'])->group(function () {
<<<<<<< HEAD
    // Admin Dashboard
    Route::get('/admin', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    // Admin Institutions Management
    Route::get('/admin/institutions', function () {
        return Inertia::render('Admin/Institutions');
    })->name('admin.institutions');

    // Admin Courses Management
    Route::get('/admin/courses', function () {
        return Inertia::render('Admin/Courses');
    })->name('admin.courses');

    // Admin Users Management
    Route::get('/admin/users', function () {
        return Inertia::render('Admin/Users');
    })->name('admin.users');
=======
    Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
>>>>>>> f0bc731136958cb86ff86f928715cea0a676a6f0
});

// Include authentication routes
require __DIR__ . '/auth.php';
require __DIR__ . '/settings.php';
require __DIR__ . '/errors.php';
