<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Pest\Laravel\json;

class QrController extends Controller
{
    function index() {
        return Inertia::render("QrScanner");
    }

    function create(Request $request) {
        $request->validate(["qr" => "required"]);

        $student = Student::where('qr', $request->qr)->first();

        
        return $student;
        
    }
}

