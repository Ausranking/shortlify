import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {

  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
     <Navbar/>
      <main>
        <Outlet/>
      </main>
      <footer>
        <h4>Global Footer</h4>
      </footer>
    </>
  );
}
