import { createBrowserRouter } from 'react-router-dom';
import Welcome from '@/pages/welcome';
import About from '@/pages/about';
import Institutions from '@/pages/institutions';
import ProCourses from '@/pages/pro-courses';
import FreeCourses from '@/pages/free-courses';
import CatalogWA from '@/pages/catalog-wa';
import InstitutionDetail from '@/pages/institution-detail';
import HotelBooking from '@/pages/hotel-booking';
import LMSNavigation from '@/components/lms-navigation';

export default createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <LMSNavigation />
        <Welcome />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <LMSNavigation />
        <About />
      </>
    ),
  },
  {
    path: '/institutions',
    element: (
      <>
        <LMSNavigation />
        <Institutions />
      </>
    ),
  },
  {
    path: '/pro-courses',
    element: (
      <>
        <LMSNavigation />
        <ProCourses />
      </>
    ),
  },
  {
    path: '/free-courses',
    element: (
      <>
        <LMSNavigation />
        <FreeCourses />
      </>
    ),
  },
  {
    path: '/catalog-wa',
    element: (
      <>
        <LMSNavigation />
        <CatalogWA />
      </>
    ),
  },
  {
    path: '/institution/:id',
    element: (
      <>
        <LMSNavigation />
        <InstitutionDetail />
      </>
    ),
  },
  {
    path: '/hotel-booking',
    element: (
      <>
        <LMSNavigation />
        <HotelBooking />
      </>
    ),
  },
]);