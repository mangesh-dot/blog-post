import React from "react";
import { Link } from "react-router-dom";
import "../style/App.css";
import "../style/nav.css";


const Home = () => {
  return (

    
    <div className="home-container">

<nav className="navbar">
      <h2 className="logo">Blog App</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
      <h1>Welcome to the Blog App</h1>
      <p>Explore the latest blogs and stay updated!</p>
      <Link to="/blogs" className="home-button">View Blogs</Link> 
      
    </div>
  );
};

export default Home;
