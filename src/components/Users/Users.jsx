import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState(null);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    // Pasar el token para la peticion get
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    // Llamar a la lista de usuarios pasandole el accessToken
    // y los metemos en variable de estado "users"
    axios
      .get("http://51.38.51.187:5050/api/v1/users/", config)
      .then((response) => {
        setUsers(response.data.items);
      });
  }, [accessToken]);

  const logOut = (e) => {
    localStorage.clear();
    alert("Usuario desconectado");
    window.location.href = "/";
  };

  const seeUser = (e) => {
    const button = e.target;
    const userid = button.id;
    localStorage.setItem("id", userid);
    window.location.href = "/seeuser";
  };

  const deleteUser = (e) => {
    const button = e.target;
    const userid = button.id;
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const url = `http://51.38.51.187:5050/api/v1/users/${userid}`;
    axios
      .delete(url, config)
      .then((response) => {
        alert("Usuario borrado");
        setTimeout(() => {
          window.location.href = "/users";
        }, 1000);
      })
      .catch((error) => {
        alert("No ha sido posible borrar el usuario.");
      });
  };

  return (
    <div className="body">
      <div className="right">
        <button type="submit" onClick={logOut}>
          Salir
        </button>
      </div>

      <h2>Listado de usuarios</h2>

      <table className="table table-bordered table-dark">
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
          {users != null ? (
            users.map((user) => {
              return (
                <tr key={user.email}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>
                    <button id={user.id} type="submit" onClick={seeUser}>
                      Ver/Modificar
                    </button>
                    <button id={user.id} type="submit" onClick={deleteUser}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr />
          )}
      </table>
    </div>
  );
};
export default Users;
