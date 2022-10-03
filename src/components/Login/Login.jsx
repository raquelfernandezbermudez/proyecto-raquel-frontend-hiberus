import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://51.38.51.187:5050/api/v1/auth/log-in",
        {
          ...userLogin
        }
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("email", userLogin.email);

      setSuccessMessage("Datos correctos");

      setTimeout(() => {
        navigate("/users");
      }, 1000);
    } catch (error) {
      console.log(error);
      setErrorMessage("Credenciales no válidas");
      setTimeout(() => {
        window.location.href = "/LogIn";
      }, 5000);
    }
  };
  return (
    <div>
      <h3>Introduce tus datos</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          <p>Contraseña</p>
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {
        errorMessage != null ? <div>{errorMessage}</div> : <div />
      }
    </div>
  );
};
export default Login;
