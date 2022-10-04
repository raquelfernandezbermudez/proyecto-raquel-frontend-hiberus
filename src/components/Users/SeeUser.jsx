import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";
import { useNavigate } from "react-router-dom";

const SeeUser = () => {
  const [user, setUser] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    // Pasar el token para la peticion get
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    // Llamar a la lista de usuarios pasandole el accessToken
    // y los metemos en variable de estado "users"
    const url = `http://51.38.51.187:5050/api/v1/users/${id}`;
    axios.get(url, config).then((response) => {
      setUser(response.data);
    });
  }, [accessToken, id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const modifyUser = (e) => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const url = `http://51.38.51.187:5050/api/v1/users/${id}`;
    axios
      .put(
        url,
        {
          ...user,
        },
        config,
        alert('Usuario modificado correctamente')
      )
      .then((response) => {
        setUser(response.data);
      
      });
  };

  const volver = (e) => {
    navigate("/users");
  };

  return (
    <div>
      <h2>Vista usuario</h2>
      {user != null ? (
        <div className="centrar">
          <form onSubmit={modifyUser}>
          <p>Puedes modificar los datos del usuario</p>
            <label>
              <p>Email</p>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Nombre</p>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Apellido</p>
              <input
                type="text"
                name="surname"
                value={user.surname}
                onChange={handleChange}
              />
            </label>
            <button type="text" name="modificar" onClick={modifyUser}>
              Modificar
            </button>
            <button type="text" name="volver" onClick={volver}>
              Volver
            </button>
          </form>
        </div>
      ) : (
        <br />
      )}
    </div>
  );
};

export default SeeUser;
