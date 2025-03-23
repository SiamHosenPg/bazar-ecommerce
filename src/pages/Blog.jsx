import React, { useEffect, useState } from "react";
import blogData from "../assets/information/blogData.json";

import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    // Fetch the blog data from the JSON file
    setBlogs(blogData);
  }, []);

  return (
    <div className="bg-white PageRatio">
      <div className="mt-10 ">
        <h3 className="text-2xl font-bold ">Blog and News</h3>
        <p className="mt-2">
          Welcome to our blog section where we share the latest news and
          updates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-16">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="border-b pb-4"
                data-aos="fade-up"
                data-aos-delay={`${index}00`}
              >
                <img
                  className=" w-full object-cover mb-4 block bg-slate-100 aspect-[5/3] rounded-md hover:scale-105 duration-300"
                  src={blog.image}
                  alt={blog.title}
                />
                <h4 className=" px-4 md:px-0">{blog.title}</h4>
                <p className="text-sm text-gray-600 px-4 md:px-0 mt-1">
                  <b>{blog.author}</b>{" "}
                  <span className="text-sm"> - {blog.date}</span>
                </p>
                <p className="mt-3 px-4 md:px-0">{blog.content}</p>
              </div>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
