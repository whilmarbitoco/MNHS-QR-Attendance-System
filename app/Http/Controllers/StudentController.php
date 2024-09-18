<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class StudentController extends Controller
{

    function home() {
        $students = Student::all();
        
        return Inertia::render('Admin', ['students' => $students]);
    }

    function index() {

        $students = Student::all();

        return Inertia::render('Student', ['students' => $students]);
    }

    public function create(Request $request) {
    
        $validated = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'strand' => 'required|string|max:255',
            'gradeLevel' => 'required|integer|in:11,12', 
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048' 
        ]);

       
        $photo = $request->file('photo');
    
        $uuid = Str::uuid();
        $filename = $uuid . '.' . $photo->getClientOriginalExtension();

        $photo->move("uploads", $filename);
    
        $code = "MNHS::" . $uuid . $request->lastname . $request->strand . $request->gradeLevel . "<wb2c0>";
        $qr = base64_encode($code);
    

        Student::create([
            'firstname' => $validated['firstname'],
            'lastname' => $validated['lastname'],
            'strand' => $validated['strand'],
            'grade' => $validated['gradeLevel'],
            'uuid' => $uuid,
            'qr' => $qr,
            'photo' => "uploads/" . $filename 
        ]);
        return Inertia::location(route('student.index'));
}
    
}
