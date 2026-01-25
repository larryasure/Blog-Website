import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Rootlayout from "./Roots/Rootlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";
import Blogs from "./Pages/Blogs";
import BlogPost from "./Pages/BlogPost";
import Contact from "./Pages/Contact";
import Category from "./Pages/Category";
import CategoryPosts from "./Pages/CategoryPosts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,

    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "blogs", Component: Blogs },
      { path: "blogs/:slug", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "category", Component: Category },
      { path: "category/:slug", Component: CategoryPosts },
      { path: "*", Component: Error404 },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
