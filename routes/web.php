<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QrController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [StudentController::class,'home'])->name('student.home');
Route::get('/student', [StudentController::class, "index"])->name("student.index");
Route::post('/student', [StudentController::class, "create"])->name("student.create");

Route::get('/qr', [QrController::class, "index"])->name("qr.index");
Route::post('/qr', [QrController::class, "create"])->name("qr.create");


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
