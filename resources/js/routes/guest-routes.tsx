import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import GuestLayout from '@/layouts/guest-layout';
import LoadingSpinner from '@/components/ui/loading-spinner';

// --- Lazy Loaded Components ---
const WelcomePage = lazy(() => import('@/pages/welcome-with-layout'));
const AboutPage = lazy(() => import('@/pages/about'));
const ContactPage = lazy(() => import('@/pages/contact'));
const CoursesPage = lazy(() => import('@/pages/courses'));
const BlogPage = lazy(() => import('@/pages/blog'));
const PrivacyPage = lazy(() => import('@/pages/privacy'));
const TermsPage = lazy(() => import('@/pages/terms'));
const NotFoundPage = lazy(() => import('@/pages/errors/404'));

// --- Loading Component ---
const PageLoader = () => (
    <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
    </div>
);

// --- Guest Layout Wrapper ---
const GuestLayoutWrapper = ({ children }: { children: React.ReactNode }) => (
    <Suspense fallback={<PageLoader />}>
        {children}
    </Suspense>
);

// --- Route Configuration ---
export const guestRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <GuestLayoutWrapper>
                <WelcomePage />
            </GuestLayoutWrapper>
        ),
    },
    {
        path: '/about',
        element: (
            <GuestLayoutWrapper>
                <AboutPage />
            </GuestLayoutWrapper>
        ),
    },
    {
        path: '/contact',
        element: (
            <GuestLayoutWrapper>
                <ContactPage />
            </GuestLayoutWrapper>
        ),
    },
    {
        path: '/courses',
        children: [
            {
                index: true,
                element: (
                    <GuestLayoutWrapper>
                        <CoursesPage />
                    </GuestLayoutWrapper>
                ),
            },
            {
                path: 'free',
                element: (
                    <GuestLayoutWrapper>
                        <CoursesPage type="free" />
                    </GuestLayoutWrapper>
                ),
            },
            {
                path: 'pro',
                element: (
                    <GuestLayoutWrapper>
                        <CoursesPage type="pro" />
                    </GuestLayoutWrapper>
                ),
            },
            {
                path: 'certificates',
                element: (
                    <GuestLayoutWrapper>
                        <CoursesPage type="certificates" />
                    </GuestLayoutWrapper>
                ),
            },
        ],
    },
    {
        path: '/blog',
        element: (
            <GuestLayoutWrapper>
                <BlogPage />
            </GuestLayoutWrapper>
        ),
    },
    {
        path: '/privacy',
        element: (
            <GuestLayoutWrapper>
                <PrivacyPage />
            </GuestLayoutWrapper>
        ),
    },
    {
        path: '/terms',
        element: (
            <GuestLayoutWrapper>
                <TermsPage />
            </GuestLayoutWrapper>
        ),
    },
    {
        path: '/404',
        element: (
            <GuestLayoutWrapper>
                <NotFoundPage />
            </GuestLayoutWrapper>
        ),
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />,
    },
]);

// --- Alternative: Nested Routes with Layout ---
export const nestedGuestRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <GuestLayout>
                <Outlet />
            </GuestLayout>
        ),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <WelcomePage />
                    </Suspense>
                ),
            },
            {
                path: 'about',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <AboutPage />
                    </Suspense>
                ),
            },
            {
                path: 'contact',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <ContactPage />
                    </Suspense>
                ),
            },
            {
                path: 'courses',
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <CoursesPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'free',
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <CoursesPage type="free" />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'pro',
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <CoursesPage type="pro" />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: 'blog',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <BlogPage />
                    </Suspense>
                ),
            },
            {
                path: 'privacy',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <PrivacyPage />
                    </Suspense>
                ),
            },
            {
                path: 'terms',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <TermsPage />
                    </Suspense>
                ),
            },
            {
                path: '404',
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <NotFoundPage />
                    </Suspense>
                ),
            },
            {
                path: '*',
                element: <Navigate to="/404" replace />,
            },
        ],
    },
]);

// --- Route Guards ---
export const protectedGuestRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <GuestLayout>
                <Outlet />
            </GuestLayout>
        ),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <WelcomePage />
                    </Suspense>
                ),
            },
            {
                path: 'courses',
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <CoursesPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'pro',
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <CoursesPage type="pro" />
                            </Suspense>
                        ),
                        // Add authentication guard here if needed
                        loader: async () => {
                            // Check if user is authenticated
                            const isAuthenticated = await checkAuthStatus();
                            if (!isAuthenticated) {
                                // Assuming redirect is available globally or imported
                                // import { redirect } from 'react-router-dom';
                                // throw redirect('/login');
                            }
                            return null;
                        },
                    },
                ],
            },
        ],
    },
]);

// --- Utility Functions ---
const checkAuthStatus = async (): Promise<boolean> => {
    // Implement your authentication check logic here
    return false;
};

// --- Export Default ---
export default guestRoutes;