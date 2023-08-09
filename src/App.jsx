import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Spinner from './components/Spinner'; // Import the Spinner component

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyAbout = React.lazy(() => import('./pages/About'));
const LazyInitiative = React.lazy(() => import('./components/initiatives'));
const LazyGallery = React.lazy(() => import('./pages/Gallery'));
const LazyReachOut = React.lazy(() => import('./pages/ReachOut'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LazyHome />,
      },
      {
        path: '/About',
        element: <LazyAbout />,
      },
      {
        path: '/Initiative',
        element: <LazyInitiative />,
      },
      {
        path: '/Gallery',
        element: <LazyGallery />,
      },
      {
        path: '/ReachOut',
        element: <LazyReachOut />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<Spinner />}> {/* Use the Spinner component */}
      <RouterProvider router={router} />
    </Suspense>
  );
}
