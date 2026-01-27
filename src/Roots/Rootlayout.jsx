import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Footer";
 import { Toaster } from "react-hot-toast";

export default function Rootlayout() {
  return (
    <div>
      <Navbar />
      <Toaster position='top-center' reverseOrder={false} />
      <main>
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
