import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
const Home = React.lazy(() => import("./pages/Home"));
const Features = React.lazy(() => import("./pages/Features"));
import ErrorPage from "./pages/ErrorPage";

//layouts
import RootLayout from "./layouts/RootLayout";
import Loading from "./components/Loading";
import Login from "./pages/Login";

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
          <div className=" grid h-screen place-content-center">
            <Loading />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
