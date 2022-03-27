import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loading from 'components/Loading';

import LandingPage from 'viewControllers/LandingPage';

const PageNotFound = lazy(() => import('viewControllers/PageNotFound'));

const AppRoutes = (): JSX.Element => (
  <Suspense
    fallback={
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    }
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Fallback route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default AppRoutes;
