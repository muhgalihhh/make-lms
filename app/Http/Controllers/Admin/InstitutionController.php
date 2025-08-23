<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Institution;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InstitutionController extends Controller
{
    /**
     * Menampilkan informasi institusi (hanya 1 institusi untuk platform kursus pribadi).
     */
    public function index(): Response
    {
        $institution = Institution::withCount('courses')->first();
        
        return Inertia::render('admin/institutions/index', [
            'institution' => $institution,
        ]);
    }

    /**
     * Tampilkan form untuk membuat institusi baru (hanya jika belum ada institusi).
     */
    public function create(): Response
    {
        // Cek apakah sudah ada institusi
        if (Institution::count() > 0) {
            return redirect()->route('admin.institutions.index')
                ->with('error', 'Institusi sudah ada. Platform kursus pribadi hanya mendukung satu institusi.');
        }

        return Inertia::render('admin/institutions/create');
    }

    /**
     * Simpan institusi baru ke database (hanya jika belum ada institusi).
     */
    public function store(Request $request)
    {
        // Cek apakah sudah ada institusi
        if (Institution::count() > 0) {
            return redirect()->route('admin.institutions.index')
                ->with('error', 'Institusi sudah ada. Platform kursus pribadi hanya mendukung satu institusi.');
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'website' => 'nullable|url|max:255',
        ]);

        Institution::create($validated);

        return redirect()->route('admin.institutions.index')
            ->with('success', 'Informasi institusi berhasil dibuat.');
    }

    /**
     * Tampilkan form untuk mengedit institusi.
     */
    public function edit(Institution $institution): Response
    {
        return Inertia::render('admin/institutions/edit', [
            'institution' => $institution,
        ]);
    }

    /**
     * Update data institusi di database.
     */
    public function update(Request $request, Institution $institution)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'website' => 'nullable|url|max:255',
        ]);

        $institution->update($validated);

        return redirect()->route('admin.institutions.index')
            ->with('success', 'Informasi institusi berhasil diperbarui.');
    }

    /**
     * Hapus institusi dari database (tidak diizinkan untuk platform kursus pribadi).
     */
    public function destroy(Institution $institution)
    {
        return redirect()->route('admin.institutions.index')
            ->with('error', 'Tidak dapat menghapus institusi. Platform kursus pribadi memerlukan informasi institusi.');
    }
}