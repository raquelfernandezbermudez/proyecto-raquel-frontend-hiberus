import React, { Component } from 'react'

export class Home extends Component {
  render() {

    const login = (e) => {
      window.location.href = "/login"
    }

    const signUp = (e) => {
      window.location.href = "/signup"
    }

    return (
      <div>
        <h3>¿Qué quieres hacer?</h3>
        <button type="submit" onClick={login}>Login</button>
        <button type="submit" onClick={signUp}>Registrarme</button>
      </div>
    )
  }
}

export default Home