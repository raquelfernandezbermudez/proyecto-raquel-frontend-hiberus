import { Axios } from 'axios';
import React, { Component } from 'react';
import './SignUp.css';

export class SignUp extends Component {
  render() {

    
    // async function signUpUser() {
    //     Axios.post('http://51.38.51.187:5050/api/v1/auth/sign-up', {
    //       "name": "string",
    //       "surname": "string",
    //       "email": "string",
    //       "password": "string"
    //     })
    //     .then(response => {
    //         const mensaje = document.querySelector('#mensaje');
    //         mensaje.innerHTML = "Usuario Creado correctamente";
    //     })
    //     .catch(error => {
    //         const mensaje = document.querySelector('#mensaje'); 
    //         mensaje.innerHTML = "Usuario No pudo ser creado correctamente" 
    //     });
    // }

    return (
      <div>SignUp</div>
    )
  }
}

export default SignUp