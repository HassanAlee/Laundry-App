import React from "react";
import { BlogsData } from "./Data";
import "./BlogStyles.css";
import {
  FaUser,
  FaRegCalendarAlt,
  FaArrowRight,
  FaComments,
} from "react-icons/fa";

const Blog = () => {
  return (
    <section className="blogs space">
      <div className="section-intro">
        <h5>
          <span>News</span> & Articles
        </h5>
        <h3>Latest Blog Posts</h3>
      </div>
      <div className="blogs-container">
        {BlogsData.map((blog) => {
          return (
            <article key={blog.id} className="blog">
              <img src={blog.image} alt="blog" />
              <div className="info">
                <div className="author">
                  <span>
                    <FaUser />
                  </span>{" "}
                  by admin /{" "}
                  <span>
                    <FaRegCalendarAlt />
                  </span>
                  {blog.date}
                </div>
                <h4>{blog.heading}</h4>
                <div className="read-more">
                  <span className="read">
                    Read More <FaArrowRight />
                  </span>
                  <p>
                    <span>
                      <FaComments />
                    </span>
                    {blog.id} Comments
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
