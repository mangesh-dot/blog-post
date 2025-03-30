import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {                      
    if (password !== confirmPassword) {                                      // Check if passwords match                   
      alert("Passwords do not match");
      return;
    }

    
    localStorage.setItem("user", JSON.stringify({ username, password }));   // Storing user in localStorage 
    
    alert("Signup successful! Please log in.");
    navigate("/login");                                                       // Redirect to login page
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}                     // Handle username input                  
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}                       // Handle password input
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}               // Handle confirm password input
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
