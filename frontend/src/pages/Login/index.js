import React from "react";
import "./style.css";

import {FiLogIn} from 'react-icons/fi'
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

function Login() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form action="">
            <h1>Faça seu logon</h1>
            <input placeholder="Sua ID"/>
            <button className="button" type="submit">Entrar</button>
            <a href="/register"><FiLogIn size={16} color="#e02041"/> Não tenho cadastro</a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default Login;
