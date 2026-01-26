import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import error from '../assets/error.svg'

export default function Error404() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true }}
        className="min-h-screen px-8 "
      >
        <div className="flex items-center justify-center flex-col  ">
          <span className="text-[10rem] gap-5 flex  font-black">
            4
            <img src={error} className="w-30" alt="" /> 4
          </span>
          <h1 className="text-3xl font-thin mb-10">Page Not Found</h1>

          <div className="flex flex-col space-y-5 ">
            <h2 className="font-semibold italic text-3xl md:text-4xl text-center">
              Whoops! This page must be a ghost - it's not here!
            </h2>

            <Link to={"/"} className="text-center">
              <button className=" py-2.5 px-5 bg-black border border-gray-200  text-white self-center rounded-full active:scale-105 transition-all duration-200 cursor-pointer ">
                back to Home
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
