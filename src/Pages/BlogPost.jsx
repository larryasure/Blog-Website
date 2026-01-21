import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../Data/sample";

export default function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="min-h-[90vh] mx-auto max-w-5xl py-15">
      <p className="p-10 text-4xl capitalize ">Post not found</p>
    </div>;
  }

  return (
    <div className="min-h-screen px-9 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover  rounded-xl mb-6"
      />

      <p className="text-sm text-gray-500 mb-4">{post.createdAt}</p>

      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  );
}
