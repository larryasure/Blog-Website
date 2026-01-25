import React from "react";
import { posts } from "../Data/sample";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen px-8 py-16 max-w-7xl mx-auto">

      {/* HERO SECTION */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Stories, Tutorials & Ideas
        </h1>

        <p className="text-gray-600 max-w-xl mb-6">
          Exploring technology, lifestyle, design, and everything in between.
        </p>

        <NavLink
          to="/blogs"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Explore Blog
        </NavLink>
      </section>

      {/* INTRO */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-3">Welcome to my Blog</h2>
        <p className="text-gray-500 max-w-xl">
          Articles, tutorials, and ideas on tech, lifestyle, and more.
        </p>
      </section>

      {/* FEATURED POSTS */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts.slice(0, 4).map((post) => (
          <NavLink key={post.id} to={`/blog/${post.slug}`}>
            <div className="shadow-md rounded-xl overflow-hidden hover:scale-[1.02] transition">
              <img
                src={post.image}
                alt={post.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg truncate">
                  {post.title}
                </h3>
              </div>
            </div>
          </NavLink>
        ))}
      </section>

    </div>
  );
}
