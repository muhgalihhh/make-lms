<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('institutions', function (Blueprint $table) {
            $table->text('description')->nullable()->after('name');
            $table->renameColumn('phone_number', 'phone');
        });
    }

    public function down(): void
    {
        Schema::table('institutions', function (Blueprint $table) {
            $table->dropColumn('description');
            $table->renameColumn('phone', 'phone_number');
        });
    }
};