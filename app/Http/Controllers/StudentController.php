<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class StudentController extends Controller
{
    function index() {

        $students = Student::all();

        return Inertia::render('Student', ['students' => $students]);
    }

    function create(Request $request) {
        $request->validate([
            'firstname'=> 'required',
            'lastname'=> 'required',
            'strand'=> 'required',
            'gradeLevel'=> 'required',
        ]);

        $uuid = Str::uuid();
        $code = (string) "MNHS::". $uuid . $request->lastname . $request->strand . $request->gradeLevel . "<wb2c0>";
        $qr = base64_encode($code);

        $student = Student::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'strand' => $request->strand,
            'grade' => $request->gradeLevel,
            'uuid' => $uuid,
            'qr' => $qr
        ]);

        return $student;
    }
}
