import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogDetail = () => {                //Importing useParams, useState and useEffect hooks from react-router-dom and react
  const { id } = useParams();
  const [blog, setBlog] = useState(null);         //State to store blog details
  const [loading, setLoading] = useState(true);   //State to manage loading state

  const [error, setError] = useState(null);     //  State to manage error state

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)   // Fetching blog details from dev.to API
      .then(response => response.json())
      .then(data => {                           //storing the data in state
        setBlog(data);   
        setLoading(false);
      })
      .catch(error => {                         // cheching for errors
        setError(error.message);
        setLoading(false);
      });
  }, [id]);                                     //Fetching blog details

  if (loading) return <p>Loading...</p>;            //Loading state     
  if (error) return <p>Error: {error}</p>;

  return (                                              //Rendering blog details
    <div className="blog-detail">
      <h1 className="blog-title">{blog.title}</h1>

     


      <div className="blog-meta">
        <img src={blog.user.profile_image} alt={blog.user.name} className="author-img" />     
        <p><strong>{blog.user.name}</strong> | {new Date(blog.published_timestamp).toDateString()}</p> 
      </div>

      <p className="blog-description">{blog.description}</p>

      <p className="blog-tags"><strong>Tags:</strong> {blog.tags.join(", ")}</p>


      <p className="blog-stats">
        ❤️ {blog.positive_reactions_count} Likes | 💬 {blog.comments_count} Comments | ⏳ {blog.reading_time_minutes} min read
      </p>

      <div className="blog-content-preview" 
        dangerouslySetInnerHTML={{ __html: blog.body_html.slice(0, 500) + "..." }} 
      />

      
    </div>
  );
};

export default BlogDetail;   // disply the detils of the blog
