import { motion, scale} from "framer-motion";
import React from "react";

export default function CategoryCards({ category }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative h-56 w-80 roounded-2xl overflow-hidden cursor-pointer"
      >
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-end p-5">
          <h2 className="text-2xl font-bold" style={{ color: category.color }}>
            {category.name}
          </h2>
          <p className="text-sm text-gray-200 mt-1">{category.description}</p>
        </div>
      </motion.div>
    </>
  );
}
