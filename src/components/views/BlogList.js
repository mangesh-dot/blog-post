import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then(response => response.json())
      .then(data => setBlogs(data.slice(1, 10)))                              // Fetch first 10 blogs
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blog Posts</h1>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <Link to={`/blog/${blog.id}`}>
              {blog.cover_image && (
                <img src={blog.cover_image} alt={blog.title} className="blog-image" />      
              )}
              <div className="blog-content">
                <h3 className="blog-heading">{blog.title}</h3>
              </div>
            </Link>
            {/* Like Button for Each Blog */}
            <LikeButton />
          </div>
        ))}
      </div>
    </div>
  );
};

// Like Button Component
const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return <button onClick={handleLike}>❤️ {likes} Likes</button>;
};




export default BlogList;
