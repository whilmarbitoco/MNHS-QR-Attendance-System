<?php

namespace App\Http\Controllers;

use App\Models\Strand;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StrandController extends Controller
{
public function index() {

    $strand = Strand::all();

    return Inertia::render("Strand", ["strands" => $strand]);
}

public function create(Request $request) {
    $validated = $request->validate([
        'strand' => 'required'
    ]);

    Strand::create(['name' => $validated['strand']]);

    return Inertia::location(route('strand.index'));
    }
}
