import { posts } from "../Data/sample";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen px-8 py-16 max-w-7xl mx-auto">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl">
          Stories that spark <br />
          <span className="text-gray-400 hover:text-black/80 duration-500 transition-all">
            ideas & curiosity
          </span>
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
      </motion.section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-3">Welcome to my Blog</h2>
        <p className="text-gray-500 max-w-xl ">
          Articles, tutorials, and ideas on tech, lifestyle, and more.
        </p>
      </section>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          grabCursor={true}
          // speed={1500}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {posts.slice(0, 6).map((post) => (
            <SwiperSlide key={post.id}>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-15 hover:scale-[1.01] duration-300 transition-all cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className=" object-cover h-80 w-full object-bottom"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-black/50 w-full">
                  <h2 className="text-white text-xl font-bold">{post.title}</h2>
                  <p className="text-gray-200 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

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
