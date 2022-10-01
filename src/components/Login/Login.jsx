import React, { Component } from 'react'
import axios from 'axios';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'Escribe tu email',
      password: 'Escribe tu contraseña'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }//Constructor

  // Gestionar los cambios en cualquier elemento del form
  handleChange(event) {
    if(event.target.name === 'email') {
      this.setState({
        email: event.target.value,
        password: this.state.password
      })    
    } else if(event.target.name === 'password') {
      this.setState({
        email: this.state.email,
        password: event.target.value
      })    
    }
  }
 
  handleSubmit(event) {
    axios.post('http://51.38.51.187:5050/api/v1/auth/log-in', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Email</p>
            <input type="text" name='email' onChange={this.handleChange}/>
          </label>
          <label>
            <p>Contraseña</p>
            <input type="password"  name='password' onChange={this.handleChange}/>
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>

      </div>
    )
  }
}

export default Login
