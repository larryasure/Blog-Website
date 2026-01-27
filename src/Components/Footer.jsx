import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-15  border-t border-gray-200 bg-black text-white/75 px-8 py-16"
    >
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-4">My Blog</h3>
          <p className=" max-w-sm">
            "Creative Proccess - Unique Thoughts, these make an exceptional Piece of writings." -  <span className="italic font-bold ">LanreCodes</span> 
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 ">
            <li>
              <NavLink to="/" className="hover:text-white transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="hover:text-white transition">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition">
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Meta */}
        <div>
          <h4 className="font-semibold mb-4">More</h4>
          <ul className="space-y-2 ">
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li id="newsletter" className="hover:text-white transition cursor-pointer">
              Newsletter
            </li>
            
            <NavLink to={'contact'}>
              <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </motion.footer>
  );
}
