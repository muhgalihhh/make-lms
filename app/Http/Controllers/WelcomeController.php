<?php

namespace App\Http\Controllers;

use App\Models\Institution;
use App\Models\Course;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    /**
     * Menampilkan halaman welcome untuk user yang belum login
     */
    public function index(): Response
    {
        $institutions = Institution::with(['reviews'])
            ->get()
            ->map(function ($institution) {
                $reviews = $institution->reviews;
                $rating = $reviews->avg('rating') ?? 0;
                $reviewCount = $reviews->count();
                
                return [
                    'id' => $institution->id,
                    'name' => $institution->name,
                    'description' => $institution->description,
                    'phone' => $institution->phone,
                    'email' => $institution->email,
                    'address' => $institution->address,
                    'website' => $institution->website,
                    'rating' => round($rating, 1),
                    'review_count' => $reviewCount,
                ];
            });

        $proCourses = Course::with(['institution', 'category'])
            ->where('is_pro', true)
            ->where('price', '>', 0)
            ->get()
            ->map(function ($course) {
                return [
                    'id' => $course->id,
                    'title' => $course->title,
                    'description' => $course->description,
                    'price' => $course->price,
                    'is_pro' => $course->is_pro,
                    'institution' => [
                        'id' => $course->institution->id,
                        'name' => $course->institution->name,
                    ],
                    'category' => [
                        'id' => $course->category->id,
                        'name' => $course->category->name,
                    ],
                ];
            });

        $freeCourses = Course::with(['institution', 'category'])
            ->where('is_pro', false)
            ->where('price', 0)
            ->get()
            ->map(function ($course) {
                return [
                    'id' => $course->id,
                    'title' => $course->title,
                    'description' => $course->description,
                    'price' => $course->price,
                    'is_pro' => $course->is_pro,
                    'institution' => [
                        'id' => $course->institution->id,
                        'name' => $course->institution->name,
                    ],
                    'category' => [
                        'id' => $course->category->id,
                        'name' => $course->category->name,
                    ],
                ];
            });

        return Inertia::render('welcome', [
            'institutions' => $institutions,
            'proCourses' => $proCourses,
            'freeCourses' => $freeCourses,
        ]);
    }

    /**
     * API endpoint untuk mendapatkan data lembaga
     */
    public function getInstitutions(): JsonResponse
    {
        $institutions = Institution::with(['reviews'])
            ->get()
            ->map(function ($institution) {
                $reviews = $institution->reviews;
                $rating = $reviews->avg('rating') ?? 0;
                $reviewCount = $reviews->count();
                
                return [
                    'id' => $institution->id,
                    'name' => $institution->name,
                    'description' => $institution->description,
                    'phone' => $institution->phone,
                    'email' => $institution->email,
                    'address' => $institution->address,
                    'website' => $institution->website,
                    'rating' => round($rating, 1),
                    'review_count' => $reviewCount,
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $institutions,
        ]);
    }

    /**
     * API endpoint untuk mendapatkan data kursus pro
     */
    public function getProCourses(): JsonResponse
    {
        $courses = Course::with(['institution', 'category'])
            ->where('is_pro', true)
            ->where('price', '>', 0)
            ->get()
            ->map(function ($course) {
                return [
                    'id' => $course->id,
                    'title' => $course->title,
                    'description' => $course->description,
                    'price' => $course->price,
                    'is_pro' => $course->is_pro,
                    'institution' => [
                        'id' => $course->institution->id,
                        'name' => $course->institution->name,
                    ],
                    'category' => [
                        'id' => $course->category->id,
                        'name' => $course->category->name,
                    ],
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $courses,
        ]);
    }

    /**
     * API endpoint untuk mendapatkan data kursus gratis
     */
    public function getFreeCourses(): JsonResponse
    {
        $courses = Course::with(['institution', 'category'])
            ->where('is_pro', false)
            ->where('price', 0)
            ->get()
            ->map(function ($course) {
                return [
                    'id' => $course->id,
                    'title' => $course->title,
                    'description' => $course->description,
                    'price' => $course->price,
                    'is_pro' => $course->is_pro,
                    'institution' => [
                        'id' => $course->institution->id,
                        'name' => $course->institution->name,
                    ],
                    'category' => [
                        'id' => $course->category->id,
                        'name' => $course->category->name,
                    ],
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $courses,
        ]);
    }

    /**
     * API endpoint untuk mendapatkan data cuaca
     */
    public function getWeather(Request $request): JsonResponse
    {
        // In real implementation, this would call a weather API
        // For now, return mock data
        $weather = [
            'temperature' => 28,
            'condition' => 'Cerah Berawan',
            'city' => 'Jakarta',
            'humidity' => 75,
            'wind_speed' => 12,
        ];

        return response()->json([
            'success' => true,
            'data' => $weather,
        ]);
    }

    /**
     * API endpoint untuk mendapatkan katalog lembaga berdasarkan rating
     */
    public function getInstitutionsByRating(Request $request): JsonResponse
    {
        $minRating = $request->get('min_rating', 0);
        $maxRating = $request->get('max_rating', 5);

        $institutions = Institution::with(['reviews'])
            ->get()
            ->map(function ($institution) {
                $reviews = $institution->reviews;
                $rating = $reviews->avg('rating') ?? 0;
                $reviewCount = $reviews->count();
                
                return [
                    'id' => $institution->id,
                    'name' => $institution->name,
                    'description' => $institution->description,
                    'phone' => $institution->phone,
                    'email' => $institution->email,
                    'address' => $institution->address,
                    'website' => $institution->website,
                    'rating' => round($rating, 1),
                    'review_count' => $reviewCount,
                ];
            })
            ->filter(function ($institution) use ($minRating, $maxRating) {
                return $institution['rating'] >= $minRating && $institution['rating'] <= $maxRating;
            })
            ->values();

        return response()->json([
            'success' => true,
            'data' => $institutions,
        ]);
    }
}