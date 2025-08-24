import { Head } from '@inertiajs/react';
import GuestLayout from '@/layouts/guest-layout';

export default function InstitutionDetail() {
  return (
    <GuestLayout>
      <Head title="Detail Lembaga - Pare EDUHUB LMS" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Detail Lembaga
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Informasi lengkap tentang lembaga pendidikan
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Fitur Detail Lembaga</h2>
            <p className="text-gray-600">
              Halaman ini akan menampilkan informasi lengkap tentang lembaga pendidikan, 
              termasuk program, fasilitas, ulasan, dan kontak informasi.
            </p>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}