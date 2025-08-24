<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Institution;
use App\Models\Course;
use App\Models\Category;
use App\Models\Review;
use App\Models\User;

class WelcomePageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create categories
        $categories = [
            ['name' => 'Programming', 'description' => 'Kursus pemrograman dan pengembangan software'],
            ['name' => 'Marketing', 'description' => 'Kursus digital marketing dan strategi bisnis'],
            ['name' => 'Data Science', 'description' => 'Kursus analisis data dan kecerdasan buatan'],
            ['name' => 'Design', 'description' => 'Kursus desain grafis dan UI/UX'],
            ['name' => 'Business', 'description' => 'Kursus bisnis dan manajemen'],
        ];

        foreach ($categories as $categoryData) {
            Category::firstOrCreate(
                ['name' => $categoryData['name']],
                $categoryData
            );
        }

        // Create institutions
        $institutions = [
            [
                'name' => 'Lembaga Pendidikan Utama',
                'description' => 'Lembaga pendidikan terkemuka dengan fokus pada pengembangan skill profesional. Kami telah melatih ribuan profesional yang sukses di berbagai industri.',
                'phone' => '+62 21 1234 5678',
                'email' => 'info@lembagautama.com',
                'address' => 'Jl. Sudirman No. 123, Jakarta Pusat',
                'website' => 'https://lembagautama.com',
            ],
            [
                'name' => 'Institut Teknologi Maju',
                'description' => 'Spesialis dalam teknologi dan inovasi digital. Menggunakan metode pembelajaran terkini dengan praktik langsung.',
                'phone' => '+62 21 2345 6789',
                'email' => 'contact@itmaju.com',
                'address' => 'Jl. Thamrin No. 45, Jakarta Pusat',
                'website' => 'https://itmaju.com',
            ],
            [
                'name' => 'Akademi Bisnis Digital',
                'description' => 'Pusat pembelajaran bisnis dan digital marketing. Fokus pada praktik bisnis modern dan strategi digital.',
                'phone' => '+62 21 3456 7890',
                'email' => 'hello@akademibisnis.com',
                'address' => 'Jl. Gatot Subroto No. 67, Jakarta Selatan',
                'website' => 'https://akademibisnis.com',
            ],
            [
                'name' => 'Sekolah Desain Kreatif',
                'description' => 'Tempat belajar desain grafis, UI/UX, dan kreativitas digital. Dikenal dengan pendekatan praktis dan portofolio yang kuat.',
                'phone' => '+62 21 4567 8901',
                'email' => 'info@sekolahdesain.com',
                'address' => 'Jl. Kemang Raya No. 89, Jakarta Selatan',
                'website' => 'https://sekolahdesain.com',
            ],
            [
                'name' => 'Pusat Data Analytics',
                'description' => 'Spesialis dalam data science, machine learning, dan business intelligence. Menggunakan tools dan teknologi terbaru.',
                'phone' => '+62 21 5678 9012',
                'email' => 'contact@dataanalytics.com',
                'address' => 'Jl. Kuningan No. 12, Jakarta Selatan',
                'website' => 'https://dataanalytics.com',
            ],
        ];

        foreach ($institutions as $institutionData) {
            Institution::firstOrCreate(
                ['email' => $institutionData['email']],
                $institutionData
            );
        }

        // Get categories and institutions for course creation
        $programmingCategory = Category::where('name', 'Programming')->first();
        $marketingCategory = Category::where('name', 'Marketing')->first();
        $dataScienceCategory = Category::where('name', 'Data Science')->first();
        $designCategory = Category::where('name', 'Design')->first();
        $businessCategory = Category::where('name', 'Business')->first();

        $lembagaUtama = Institution::where('name', 'Lembaga Pendidikan Utama')->first();
        $itMaju = Institution::where('name', 'Institut Teknologi Maju')->first();
        $akademiBisnis = Institution::where('name', 'Akademi Bisnis Digital')->first();
        $sekolahDesain = Institution::where('name', 'Sekolah Desain Kreatif')->first();
        $pusatData = Institution::where('name', 'Pusat Data Analytics')->first();

        // Create pro courses
        $proCourses = [
            [
                'institution_id' => $lembagaUtama->id,
                'category_id' => $programmingCategory->id,
                'title' => 'Full Stack Web Development',
                'description' => 'Pelajari pengembangan web dari frontend hingga backend. Kursus lengkap dengan React, Node.js, dan database.',
                'price' => 2500000,
                'is_pro' => true,
            ],
            [
                'institution_id' => $akademiBisnis->id,
                'category_id' => $marketingCategory->id,
                'title' => 'Digital Marketing Masterclass',
                'description' => 'Strategi marketing digital untuk bisnis modern. Mencakup SEO, SEM, social media, dan content marketing.',
                'price' => 1800000,
                'is_pro' => true,
            ],
            [
                'institution_id' => $itMaju->id,
                'category_id' => $dataScienceCategory->id,
                'title' => 'Data Science & AI',
                'description' => 'Analisis data dan kecerdasan buatan. Belajar Python, machine learning, dan deep learning.',
                'price' => 3200000,
                'is_pro' => true,
            ],
            [
                'institution_id' => $sekolahDesain->id,
                'category_id' => $designCategory->id,
                'title' => 'UI/UX Design Professional',
                'description' => 'Desain antarmuka dan pengalaman pengguna yang profesional. Menggunakan Figma, Adobe XD, dan tools modern.',
                'price' => 2200000,
                'is_pro' => true,
            ],
            [
                'institution_id' => $pusatData->id,
                'category_id' => $businessCategory->id,
                'title' => 'Business Intelligence & Analytics',
                'description' => 'Business intelligence dan analisis data untuk pengambilan keputusan bisnis yang tepat.',
                'price' => 2800000,
                'is_pro' => true,
            ],
        ];

        foreach ($proCourses as $courseData) {
            Course::firstOrCreate(
                [
                    'title' => $courseData['title'],
                    'institution_id' => $courseData['institution_id']
                ],
                $courseData
            );
        }

        // Create free courses
        $freeCourses = [
            [
                'institution_id' => $lembagaUtama->id,
                'category_id' => $programmingCategory->id,
                'title' => 'HTML & CSS Dasar',
                'description' => 'Pengenalan dasar HTML dan CSS untuk pemula. Langkah awal menjadi web developer.',
                'price' => 0,
                'is_pro' => false,
            ],
            [
                'institution_id' => $akademiBisnis->id,
                'category_id' => $marketingCategory->id,
                'title' => 'Pengantar Digital Marketing',
                'description' => 'Konsep dasar marketing digital. Memahami landscape digital marketing saat ini.',
                'price' => 0,
                'is_pro' => false,
            ],
            [
                'institution_id' => $itMaju->id,
                'category_id' => $dataScienceCategory->id,
                'title' => 'Python untuk Pemula',
                'description' => 'Belajar Python dari nol. Dasar-dasar pemrograman Python untuk data science.',
                'price' => 0,
                'is_pro' => false,
            ],
            [
                'institution_id' => $sekolahDesain->id,
                'category_id' => $designCategory->id,
                'title' => 'Prinsip Desain Grafis',
                'description' => 'Prinsip dasar desain grafis. Color theory, typography, dan layout design.',
                'price' => 0,
                'is_pro' => false,
            ],
        ];

        foreach ($freeCourses as $courseData) {
            Course::firstOrCreate(
                [
                    'title' => $courseData['title'],
                    'institution_id' => $courseData['institution_id']
                ],
                $courseData
            );
        }

        // Create sample users for reviews
        $users = User::factory(10)->create();

        // Create reviews for institutions
        $reviews = [
            // Lembaga Pendidikan Utama - High ratings
            ['institution_id' => $lembagaUtama->id, 'rating' => 5, 'comment' => 'Lembaga yang sangat profesional dan berkualitas tinggi.'],
            ['institution_id' => $lembagaUtama->id, 'rating' => 5, 'comment' => 'Pengajar sangat kompeten dan materi sangat relevan.'],
            ['institution_id' => $lembagaUtama->id, 'rating' => 4, 'comment' => 'Fasilitas lengkap dan support yang baik.'],
            ['institution_id' => $lembagaUtama->id, 'rating' => 5, 'comment' => 'Sangat puas dengan hasil pembelajaran di sini.'],
            ['institution_id' => $lembagaUtama->id, 'rating' => 5, 'comment' => 'Rekomendasi terbaik untuk belajar programming.'],

            // Institut Teknologi Maju - High ratings
            ['institution_id' => $itMaju->id, 'rating' => 5, 'comment' => 'Teknologi terbaru dan metode pembelajaran yang inovatif.'],
            ['institution_id' => $itMaju->id, 'rating' => 4, 'comment' => 'Pengajar sangat berpengalaman di bidang teknologi.'],
            ['institution_id' => $itMaju->id, 'rating' => 5, 'comment' => 'Kurikulum yang sangat up-to-date dengan industri.'],
            ['institution_id' => $itMaju->id, 'rating' => 4, 'comment' => 'Fasilitas lab yang lengkap dan modern.'],

            // Akademi Bisnis Digital - Medium ratings
            ['institution_id' => $akademiBisnis->id, 'rating' => 4, 'comment' => 'Materi bisnis yang sangat praktis dan aplikatif.'],
            ['institution_id' => $akademiBisnis->id, 'rating' => 4, 'comment' => 'Pengajar dari praktisi bisnis yang berpengalaman.'],
            ['institution_id' => $akademiBisnis->id, 'rating' => 4, 'comment' => 'Networking yang sangat baik dengan komunitas bisnis.'],
            ['institution_id' => $akademiBisnis->id, 'rating' => 5, 'comment' => 'Strategi marketing yang sangat relevan dengan kondisi saat ini.'],

            // Sekolah Desain Kreatif - Medium ratings
            ['institution_id' => $sekolahDesain->id, 'rating' => 4, 'comment' => 'Kreativitas yang sangat dikembangkan di sini.'],
            ['institution_id' => $sekolahDesain->id, 'rating' => 4, 'comment' => 'Portofolio yang sangat membantu untuk karir.'],
            ['institution_id' => $sekolahDesain->id, 'rating' => 4, 'comment' => 'Pengajar yang sangat kreatif dan inspiratif.'],

            // Pusat Data Analytics - Medium ratings
            ['institution_id' => $pusatData->id, 'rating' => 4, 'comment' => 'Tools dan teknologi data yang sangat lengkap.'],
            ['institution_id' => $pusatData->id, 'rating' => 4, 'comment' => 'Analisis data yang sangat mendalam dan praktis.'],
            ['institution_id' => $pusatData->id, 'rating' => 4, 'comment' => 'Pengajar yang sangat ahli di bidang data science.'],
        ];

        foreach ($reviews as $reviewData) {
            $user = $users->random();
            Review::firstOrCreate(
                [
                    'user_id' => $user->id,
                    'institution_id' => $reviewData['institution_id'],
                    'rating' => $reviewData['rating']
                ],
                [
                    'user_id' => $user->id,
                    'institution_id' => $reviewData['institution_id'],
                    'rating' => $reviewData['rating'],
                    'comment' => $reviewData['comment'],
                ]
            );
        }

        $this->command->info('Welcome page data seeded successfully!');
    }
}