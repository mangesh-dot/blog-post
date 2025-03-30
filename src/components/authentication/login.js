import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser=localStorage.getItem("user");                                // Retrieve user from localStorage
    const{username:storedUsername, password:storedPassword} =JSON.parse(storedUser);    // Parse the stored user data
    if (username === storedUsername && password === storedPassword) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}             // Handle username input
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}               // Handle password input
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
