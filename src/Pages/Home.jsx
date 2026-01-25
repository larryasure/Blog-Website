import { posts } from "../Data/sample";
import { NavLink } from "react-router-dom";
import Swiper from "react-swiper";


export default function Home() {
  return (
    <div className="min-h-screen px-8 py-16 max-w-7xl mx-auto">
      {/* HERO SECTION */}
      <section className="mb-32">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl">
          Stories that spark <br />
          <span className="text-gray-400">ideas & curiosity</span>
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mt-6">
          Deep dives, tutorials, and thoughts on technology, design, and
          creative living.
        </p>

        <div className="flex gap-4 mt-10">
          <NavLink
            to="/blogs"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
          >
            Read the Blog
          </NavLink>

          <NavLink
            to="/about"
            className="border border-gray-300 px-8 py-4 rounded-full hover:bg-gray-100 transition"
          >
            About Me
          </NavLink>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-3">Welcome to my Blog</h2>
        <p className="text-gray-500 max-w-xl">
          Articles, tutorials, and ideas on tech, lifestyle, and more.
        </p>
      </section>

      {/* Featured Post */}

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
                <h3 className="font-bold text-lg truncate">{post.title}</h3>
              </div>
            </div>
          </NavLink>
        ))}
      </section>
    </div>
  );
}
