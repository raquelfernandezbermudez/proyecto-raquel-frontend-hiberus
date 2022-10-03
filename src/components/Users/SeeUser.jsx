import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const SeeUser = () => {

  const [user, setUser] = useState(null);

  const accessToken = localStorage.getItem("accessToken");
  const id = localStorage.getItem("id");

  useEffect(() => {
    // Pasar el token para la peticion get
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    // Llamar a la lista de usuarios pasandole el accessToken
    // y los metemos en variable de estado "users"
    const url = `http://51.38.51.187:5050/api/v1/users/${id}`
    console.log(url)
    axios
      .get(url, config)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      });
  }, [accessToken, id]);

  
  return (
    <div>
      <div>SeeUser</div>
      {user != null ? 
          <div>
              <div>{user.email}</div>
              <div>{user.name}</div>
              <div>{user.surname}</div>
              <div>{user.id}</div>
          </div>     
          :
          <br />
      }
    </div>
  )
  
}

export default SeeUser
