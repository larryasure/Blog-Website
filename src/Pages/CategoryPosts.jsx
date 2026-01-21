import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { posts } from "../Data/sample";
NavLink;
export default function CategoryPosts() {
  const { slug } = useParams();

  const filteredPosts = posts.filter(
    (post) => post.type[0].typeof.toLowerCase() === slug.toLowerCase(),
  );
  console.log(filteredPosts);

  return (
    <>
      <div className="mb-10 p-8 rounded-2xl bg-gray-50 border">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold capitalize">{slug}</h1>

          <p className="text-gray-500">
            {filteredPosts.length} post
            {filteredPosts.length !== 1 && "s"} in this category
          </p>

          <p className="text-sm text-gray-600 max-w-xl mt-2">
            Explore articles related to{" "}
            <span className="font-medium capitalize">{slug}</span>, including
            tutorials, insights, and experiments.
          </p>
        </div>

        <div className="grid gap-8 my-10 sm:grid-cols-2 lg:grid-cols-4 ">
          {filteredPosts.map((post) => (
            <NavLink to={`/blogs/${post.slug}`} key={post.id} className="group">
              <div className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden">
                  <img
                    className="object-cover w-full h-44 transition-transform duration-300"
                    src={post.image}
                    alt={post.title}
                  />
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
                    {slug}
                  </span>

                  <h2 className="text-lg font-bold leading-snug group-hover:text-indigo-600 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
