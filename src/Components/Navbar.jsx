import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative px-1 transition-colors duration-500
   ${
     isActive
       ? "text-orange-500 font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-orange-500"
       : "text-gray-800 hover:text-orange-500 after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300"
   }`;

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">  
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          <span className="bg-clip-text text-transparent bg-linear-210 from-black to-gray-600">
            My
          </span>
          <span className="bg-linear-to-r from-red-500 to-orange-300  bg-clip-text text-transparent">
            Blog
          </span>
        </NavLink>

        {/* Desktop*/}
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/blogs" className={linkClass}>
            Blogs
          </NavLink>
          <NavLink to="/category" className={linkClass}>
            Category
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        <button
          className="md:hidden  "
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden transition-all duration-500 bg-white border-t px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Blogs
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/category"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Category
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
