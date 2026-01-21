import React from "react";
import { posts } from "../Data/sample";

import { NavLink } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="min-h-screen px-7 py-10 flex flex-wrap gap-6 justify-center">
      {posts.map((post, index) => (
        <div
          key={index}
          className="w-80 h-96 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden flex flex-col"
        >
          <NavLink to={`/blogs/${post.slug}`} className="text-black hover:text-red transition-all duration-300">
            <div className="w-full h-40 relative overflow-hidden rounded-t-2xl">
              <img
                src={post.image}
                alt={ post.image}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </NavLink>

          {/* Content */}
          <div className="p-4 flex flex-col justify-between flex-1">
            <div className="space-y-2">
              <NavLink to={`/blogs/${post.slug}`} className="text-black hover:text-red transition-all duration-300">
                <h2 className="font-bold text-lg hover:underline cursor-pointer">
                  {post.title}
                </h2>
              </NavLink>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>

            <div className="flex items-center justify-between mt-4 text-sm font-semibold">
              <span>{post.createdAt}</span>
              <span style={{ color: post.type[0].color }}>
                {post.type[0].typeof}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
