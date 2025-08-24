import { Head } from '@inertiajs/react';
import GuestLayout from '@/layouts/guest-layout';

export default function About() {
  return (
    <GuestLayout>
      <Head title="Tentang Kami - Pare EDUHUB LMS" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang Pare EDUHUB
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Platform pembelajaran online terdepan untuk lembaga pendidikan di Pare
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Visi Kami</h2>
              <p className="text-gray-600">
                Menjadi platform terdepan yang menghubungkan siswa dengan lembaga pendidikan berkualitas di Pare, 
                memudahkan akses pembelajaran dan meningkatkan kualitas pendidikan.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
              <p className="text-gray-600">
                Memberikan akses mudah ke lembaga pendidikan berkualitas, 
                menyediakan platform yang user-friendly, dan mendukung perkembangan pendidikan di Pare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}