import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
