import React, { Component } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const login = (e) => {
    navigate("/login");
  };

  const signUp = (e) => {
    navigate("/signUp");
  };

  return (
    <div>
      <form>
        <h3>¿Qué quieres hacer?</h3>
        <div className="centrarBoton">
          <button type="submit" onClick={login}>
            Logarme
          </button>
          <button type="submit" onClick={signUp}>
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
