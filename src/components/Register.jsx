import React, { useState, useEffect } from "react";
import "../styles/Login.scss";
import useri from "../icons/User.svg";
import emaili from "../icons/Mail.svg";
import locki from "../icons/Lock.svg";
import logo from "../icons/LB.png";
import img from "../icons/img.png";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
/*username, clave, nombre, correo*/

const Register = () => {
  const [username, setUsername] = useState("");
  const [clave, setClave] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const submitUser = (event) => {
    event.preventDefault();
    Axios.post("/register", {
      username: username,
      clave: clave,
      nombre: nombre,
      correo: correo,
    });
    link("/home")
  };

  const link = useNavigate();
  return (
    <div className="main">
      <section className="flex-container">
        <section className="flex-img">
          <img src={img} className="img" />
        </section>

        <section className="flex-form">
          <div className="login">
            <div className="form-container">
              <img src={logo} className="logo" />

              <p className="subtitle">Introduce tus datos para registrarte</p>

              <form action="/" className="form">
                <div className="input">
                  <img src={useri} className="icons" />
                  <input
                    type="name"
                    id="name"
                    name="nombre"
                    placeholder="Nombre"
                    className="input input-password"
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                  />
                </div>

                <div className="input">
                  <img src={useri} className="icons" />
                  <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Usuario"
                    className="input input-password"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>

                <div className="input">
                  <img src={emaili} className="icons" />
                  <input
                    type="email"
                    id="email"
                    name="correo"
                    placeholder="E-mail"
                    className="input input-password"
                    onChange={(e) => {
                      setCorreo(e.target.value);
                    }}
                  />
                </div>

                <div className="input">
                  <img src={locki} className="icons" />
                  <input
                    type="password"
                    id="password"
                    name="clave"
                    placeholder="Contraseña"
                    className="input input-password"
                    onChange={(e) => {
                      setClave(e.target.value);
                    }}
                  />
                </div>

                <div className="input">
                  <img src={locki} className="icons" />
                  <input
                    type="password"
                    id="passwordc"
                    placeholder="Confirma la contraseña"
                    className="input input-password"
                  />
                </div>

                <button
                  value="Register"
                  className="primary-button login-button"
                  onClick={submitUser}
                >
                  Registar
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Register;
