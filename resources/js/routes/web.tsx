import { createBrowserRouter } from 'react-router-dom';
import Welcome from '@/pages/welcome';
import About from '@/pages/about';
import Institutions from '@/pages/institutions';
import ProCourses from '@/pages/pro-courses';
import FreeCourses from '@/pages/free-courses';
import CatalogWA from '@/pages/catalog-wa';
import InstitutionDetail from '@/pages/institution-detail';
import HotelBooking from '@/pages/hotel-booking';

export default createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/institutions',
        element: <Institutions />,
    },
    {
        path: '/pro-courses',
        element: <ProCourses />,
    },
    {
        path: '/free-courses',
        element: <FreeCourses />,
    },
    {
        path: '/catalog-wa',
        element: <CatalogWA />,
    },
    {
        path: '/institution/:id',
        element: <InstitutionDetail />,
    },
    {
        path: '/hotel-booking',
        element: <HotelBooking />,
    },
]);