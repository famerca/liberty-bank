import React, { useEffect, useState } from "react";
import "../styles/Login.scss";
import useri from "../icons/User.svg";
import emaili from "../icons/Mail.svg";
import locki from "../icons/Lock.svg";
import logo from "../icons/LB.png";
import img from "../icons/img.png";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [clave, setClave] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = (event) => {
    event.preventDefault();
    Axios.post("/login", {
      username: username,
      clave: clave,
    }).then((response) => {
      console.log(response)
      if (response.status === 200) {
        if (response.data.message) {
          console.log(response.data.message)
          setLoginStatus(response.data.message);
        } else {
          setUser({ token: response.data[0].ID_usuario })
          setLoginStatus(response.data[0].username);
        }
      }

    });

  };

  const clicks = useNavigate();
  return (
    <div className="main">
      <section className="flex-container">
        <section className="flex-img">
          <img src={img} className="img" />
        </section>

        <section className="flex-form">
          <div className="login">
            <div className="form-container">
              <h1 className="title">Bienvenido a </h1>
              <img src={logo} className="logo" />

              <p className="subtitle">
                Introduzca sus datos para iniciar sesion
              </p>

              <form action="/" className="form">
                <div className="input">
                  <img src={useri} className="icons" />
                  <input
                    type="username"
                    id="email"
                    name="usuario"
                    placeholder="Usuario"
                    className="input input-password"
                    onChange={(e) => {
                      setUsername(e.target.value);
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

                <button
                  type="submit"
                  value="Login"
                  className="primary-button login-button"
                  onClick={login}
                >
                  Iniciar Sesion
                </button>
              </form>

              <h1 className="subtitle">
                Si no estás registrado, regístrate aquí
              </h1>
              <button
                onClick={() => clicks("/register")}
                type="submit"
                value="Registrar"
                placeholder="huehue"
                className="primary-button login-button"
              >
                Registro
              </button>

              <h1>{loginStatus}</h1>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
