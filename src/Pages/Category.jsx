import React from "react";
import { posts } from "../Data/sample";
import { Link } from "react-router-dom";

const categories = Array.from(
  new Set(posts.map((post) => post.type[0].typeof))
);

const categoryData = categories.map((category) => {
  const categoryPost = posts.find((post) => post.type[0].typeof === category);
  return {
    name: category,
    color: categoryPost.type[0].color,
    image: categoryPost.image,
  };
});

export default function Category() {
  return (
    <div className="min-h-[90vh] flex flex-wrap gap-6 justify-center py-10">
      {categoryData.map((cat, i) => (
        <Link
          key={i}
          to={`/category/${cat.name}`} 
          className="relative w-40 h-40 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
        >
        
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

         
          <div
            className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-50 text-white font-bold text-center"
            style={{ borderTop: `2px solid ${cat.color}` }} 
          >
            {cat.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
