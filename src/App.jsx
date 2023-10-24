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
import { Delay } from "react-delay-fallback";

//pages
const Home = React.lazy(() => import("./pages/Home"));
const Features = React.lazy(() => import("./pages/Features"));
import ErrorPage from "./pages/ErrorPage";

//layouts
import RootLayout from "./layouts/RootLayout";
import Loading from "./components/Loading";

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
      <Delay timeout={1000}
        fallback={<div className="grid place-content-center h-screen"><Loading /></div>}>   
        <Suspense fallback={
          <div className=" grid h-screen place-content-center"> <Loading /></div>
         
        }>       
          <RouterProvider router={router} />
        </Suspense>
      </Delay>
    </>
  );
}
