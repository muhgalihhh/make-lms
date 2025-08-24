<?php

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

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/institutions', function () {
    return Inertia::render('Institutions');
})->name('institutions');

Route::get('/pro-courses', function () {
    return Inertia::render('ProCourses');
})->name('pro-courses');

Route::get('/free-courses', function () {
    return Inertia::render('FreeCourses');
})->name('free-courses');

Route::get('/catalog-wa', function () {
    return Inertia::render('CatalogWA');
})->name('catalog-wa');

Route::get('/institution/{id}', function ($id) {
    return Inertia::render('InstitutionDetail', [
        'institutionId' => $id
    ]);
})->name('institution.detail');

Route::get('/hotel-booking', function () {
    return Inertia::render('HotelBooking');
})->name('hotel-booking');

require __DIR__.'/auth.php';
