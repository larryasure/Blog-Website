import { motion } from "framer-motion";
import React from "react";

export default function Newsletter() {

  const handleSubmit = (e) => {
      e.preventDefault()
  }
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-20 rounded-xl py-20 px-8 bg-gray-100 text-center"
        id="newsletter"
      >
        <h2 className="text-3xl md:text-4xl mx-auto mb-10">
          Weekly insights, tutorials, and thoughtful takes on modern
          development, delivered straight to your inbox.
        </h2>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit" onClick={(e)=> handleSubmit(e)}
            className="bg-black text-white px-8  rounded-full hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.section>
    </>
  );
}
