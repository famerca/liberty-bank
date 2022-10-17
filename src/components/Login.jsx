import React from "react";
import "../styles/Login.scss";
import useri from "../icons/User.svg";
import emaili from "../icons/Mail.svg";
import locki from "../icons/Lock.svg";
import logo from "../icons/LB.png";
import img from "../icons/img.png";

const Login = () => {
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
                    placeholder="Usuario"
                    className="input input-password"
                  />
                </div>

                <div className="input">
                  <img src={locki} className="icons" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    className="input input-password"
                  />
                </div>

                <button
                  onClick={() => alert("huehue")}
                  type="submit"
                  value="Login"
                  className="primary-button login-button"
                >
                  Iniciar Sesion
                </button>
              </form>

              <h1 className="subtitle">
                Si no estás registrado, regístrate aquí
              </h1>
              <button
                type="submit"
                value="Registrar"
                placeholder="huehue"
                className="primary-button login-button"
              >
                Registro
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
