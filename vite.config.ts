import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@components': path.resolve(__dirname, './resources/js/components'),
            '@pages': path.resolve(__dirname, './resources/js/pages'),
            '@layouts': path.resolve(__dirname, './resources/js/layouts'),
            '@lib': path.resolve(__dirname, './resources/js/lib'),
            '@hooks': path.resolve(__dirname, './resources/js/hooks'),
            '@types': path.resolve(__dirname, './resources/js/types'),
        },
    },
    server: {
        port: 3000,
        host: true,
        open: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    inertia: ['@inertiajs/react'],
                    ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
                    icons: ['lucide-react'],
                    utils: ['date-fns', 'clsx', 'tailwind-merge'],
                },
            },
        },
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            '@inertiajs/react',
            'lucide-react',
            'date-fns',
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
        ],
    },
    define: {
        __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    },
});
