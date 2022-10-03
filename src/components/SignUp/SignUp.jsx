import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
      name: '',
      surname: '',
      email: '',
      password: '',
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserSignUp({
      ...userSignUp, [e.target.name]:e.target.value,
    })
  }

   const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://51.38.51.187:5050//api/v1/auth/sign-up', {
       ...userSignUp
      });

      navigate('/login');

      }catch(error){
        console.log(error);
        window.location.href = "/login"
    }
  }
    return (
      <div>
        <h3>Registro de nuevo usuario</h3>
        <form onSubmit={handleSubmit}>
        <label>
            <p>Nombre</p>
            <input type="text" name='name' onChange={handleChange}/>
          </label>
          <label>
            <p>Apellido</p>
            <input type="text" name='surname' onChange={handleChange}/>
          </label>
          <label>
            <p>Email</p>
            <input type="text" name='email' onChange={handleChange}/>
          </label>
          <label>
            <p>Contraseña</p>
            <input type="password" name='password' onChange={handleChange}/>
          </label>
          <div>
            <button type="submit">Registrate</button>
          </div>
        </form>

      </div>
    )
  }
export default SignUp

