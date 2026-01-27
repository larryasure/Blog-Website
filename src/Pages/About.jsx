import { motion } from "framer-motion";
import React from "react";
import aboutImg from "../assets/about.jpg";
import content from "../assets/content.jpg";
import design from "../assets/design.jpg";
import driven from "../assets/driven.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* HERO SECTION */}
      <div className="relative">
        <img
          src={aboutImg}
          alt="about us"
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-start py-15 justify-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl lg:text-6xl font-bold"
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* INTRO SECTION */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Passion led us here</h2>

        <p className="text-gray-600 leading-relaxed text-lg">
          This platform was created to share meaningful ideas, stories, and
          insights through well-crafted content. We believe great design and
          thoughtful writing can inspire, educate, and connect people across the
          world.
        </p>
      </motion.div>

      {/* VALUES / WHAT WE DO */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-24"
      >
        <div className="grid gap-8 md:grid-cols-3 grid-cols-1">
          <div className=" flex flex-col space-y-4 rounded-2xl bg-[#f1f1f1] hover:shadow-lg transition">
            <div className="">
              <img
                src={content}
                alt="content"
                className="h-70 object-cover w-full rounded-t-2xl"
              />
            </div>

            <div className="p-3">
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-gray-600">
                Clean layouts, smooth animations, and a strong focus on user
                experience.
              </p>
            </div>
          </div>

          <div className=" flex flex-col space-y-4 rounded-2xl bg-[#f1f1f1] hover:shadow-lg transition">
            <div className="">
              <img
                src={design}
                alt="moder design"
                className="h-70 object-cover w-full rounded-t-2xl"
              />
            </div>

            <div className="p-3">
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-gray-600">
                Clean layouts, smooth animations, and a strong focus on user
                experience.
              </p>
            </div>
          </div>

          <div className=" flex flex-col space-y-3 rounded-2xl bg-[#f1f1f1] hover:shadow-lg transition">
            <div className="">
              <img
                src={driven}
                alt="community driven"
                className="h-70 object-cover w-full rounded-t-2xl"
              />
            </div>

            <div className="p-3">
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Built for readers who enjoy learning, sharing, and growing
                together.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA / CONTACT PREVIEW */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Want to reach out?</h2>

          <p className="text-gray-600 mb-8">
            Have a question, suggestion, or collaboration idea? We’d love to
            hear from you.
          </p>
          <Link to={"/contact"}>
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
