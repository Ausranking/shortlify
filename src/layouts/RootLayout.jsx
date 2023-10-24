import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {

  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
     <Navbar/>
      <main>
        <Outlet/>
      </main>
<<<<<<< HEAD
      <Footer/>
       
=======
      <footer>
        <Footer/>
      </footer>
>>>>>>> aed2acc63dac231cb149e95f68cf097b75ce23f6
    </>
  );
}
