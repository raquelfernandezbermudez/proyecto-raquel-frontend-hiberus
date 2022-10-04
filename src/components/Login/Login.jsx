import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

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
          ...userLogin,
        }
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("email", userLogin.email);
      alert("Usuario logado correctamente");
      navigate("/users");
    } catch (error) {
      alert("Credenciales no válidas");
      setTimeout(() => {
        window.location.href = "/LogIn";
      }, 2000);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Introduce tus datos</h3>
        <label>
          <p>Email</p>
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          <p>Contraseña</p>
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <div className="centrarBoton">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
