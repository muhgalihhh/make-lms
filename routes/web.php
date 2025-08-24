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

// Welcome Page - Halaman Utama Pare EDU HUB
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

// About Page - Tentang Pare EDU HUB
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Institutions Page - Katalog Lembaga berdasarkan Rating
Route::get('/institutions', function () {
    return Inertia::render('Institutions');
})->name('institutions');

// Pro Courses Page - Kelas Pro dengan Pembayaran QRIS
Route::get('/pro-courses', function () {
    return Inertia::render('ProCourses');
})->name('pro-courses');

// Free Courses Page - Kelas Gratis dengan Materi Dasar
Route::get('/free-courses', function () {
    return Inertia::render('FreeCourses');
})->name('free-courses');

// Catalog WA Page - Katalog Direct ke WhatsApp
Route::get('/catalog-wa', function () {
    return Inertia::render('CatalogWA');
})->name('catalog-wa');

// Institution Detail Page - Detail Lembaga
Route::get('/institution/{id}', function ($id) {
    return Inertia::render('InstitutionDetail', [
        'institutionId' => $id
    ]);
})->name('institution.detail');

// Hotel Booking Page - Booking Hotel dengan Tiket.com
Route::get('/hotel-booking', function () {
    return Inertia::render('HotelBooking');
})->name('hotel-booking');

// User Dashboard Routes (akan diimplementasikan)
Route::middleware(['auth'])->group(function () {
    // User Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('User/Dashboard');
    })->name('dashboard');

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
});

// Admin Routes (akan diimplementasikan)
Route::middleware(['auth', 'admin'])->group(function () {
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
});

// Include authentication routes
require __DIR__ . '/auth.php';
require
