import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import BlogList from "./components/views/BlogList";
import BlogDetail from "./components/views/BlogDetail";
import Login from "./components/authentication/login";  // Import Login Component
import ProtectedRoute from "./components/authentication/ProtectedRout";
import "./components/style/App.css";
import Signup  from "./components/authentication/Signup";

const App = () => { 
  const [isAuthenticated, setIsAuthenticated] = useState(false);  
  const[username,setUsername]=useState("");


  return (

    
      
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogList />} />  
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />   {/* Add Login Route */}
      <Route 
        path="/blog/:id" 
        element={<ProtectedRoute element={<BlogDetail />} isAuthenticated={isAuthenticated} />}   // authenticate blogdetail route
      />
      <Route path="/Signup" element={<Signup />} />  {/* Add Signup Route */}
    </Routes>
    
  );
};

export default App;
