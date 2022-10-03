import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");

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
        console.log(response.data);
      });
  }, [accessToken]);

  const logOut = (e) => {
    localStorage.clear();
    window.location.href = "/"
  }

  const seeuser = (e) => {
    const button = e.target;
    const userid = button.id;
    localStorage.setItem("id", userid);
    window.location.href = "/seeuser"
  }

  return (
    <div>

      <p> Bienvenide {email}</p>
      <button type="submit" onClick={logOut}>Salir</button>

      <h3>Listado de usuarios</h3>
    
      <table>
        <tbody>
          {
          users != null ? 
            users.map(
              (user) => {
                return (
                  <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.id}</td>
                    <td>
                      <button id={user.id} type="submit" onClick={seeuser}>Ver</button>
                    </td>
                  </tr>
                );
              }
            ):
            <tr />
          }
        </tbody>
      </table>

    </div>
  );
};
export default Users;
