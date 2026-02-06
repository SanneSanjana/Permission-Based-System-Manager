import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin(role) {
    login(role);
    navigate("/dashboard");
  }

  return (
    <>
      <h2>Login</h2>
      <button onClick={() => handleLogin("Viewer")}>Viewer</button>
      <button onClick={() => handleLogin("Editor")}>Editor</button>
      <button onClick={() => handleLogin("Admin")}>Admin</button>
    </>
  );
}
