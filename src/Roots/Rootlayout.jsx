import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Rootlayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}
