import React, { Component } from 'react'
import axios from "axios";
import { useState, useEffect } from "react";


export class SeeUser extends Component {
  render() {
    
    const accessToken = localStorage.getItem("accessToken");

    try {
      useEffect(() => {
        // Pasar el token y el id para la peticion get
        const config = {
          headers: { Authorization: `Bearer ${accessToken}` },
        };
        // Llamar a la lista de usuarios pasandole el accessToken
        // y los metemos en variable de estado "users"
        axios
          .get("http://51.38.51.187:5050/api/v1/users/{id}", config)
          .then((response) => {
            setUsers(response.data.items);
          });
      }, [accessToken]);
      
    } catch (error) {
      console.log(error);
    }

    return (
      <div>Ver</div>
    )
  }
}

export default SeeUser