import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  NavLink,
  Routes,
  Route,
  Router,
} from "react-router-dom";

//pages
const Home = React.lazy(() => import("./pages/Home"));
const Features = React.lazy(() => import("./pages/Features"));
import ErrorPage from "./pages/ErrorPage";

//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="*" element={<ErrorPage />} />
      <Route index element={<Home />} />
      <Route path="features" element={<Features />} />
    </Route>
  )
);
export default function App() {
  return (
    <>
      <Suspense
        fallback={
          <p className="text-center text-green-600 text-lg">Loading...</p>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
