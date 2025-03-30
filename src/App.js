import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import BlogList from "./components/views/BlogList";
import BlogDetail from "./components/views/BlogDetail";
import "./components/style/App.css";

const App = () => {    // Main App component
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogList />} />  
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
};
                                        //defining the routes for the application
export default App;
