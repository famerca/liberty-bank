import React from "react";
import "../styles/Login.scss";
import useri from "../icons/User.svg";
import emaili from "../icons/Mail.svg";
import locki from "../icons/Lock.svg";
import logo from "../icons/LB.png";
import img from "../icons/img.png";

const Register = () => {
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
                    id="email"
                    placeholder="Nombre"
                    className="input input-password"
                  />
                </div>

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
                  <img src={emaili} className="icons" />
                  <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
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

                <div className="input">
                  <img src={locki} className="icons" />
                  <input
                    type="password"
                    id="passwordc"
                    placeholder="Confirma la contraseña"
                    className="input input-password"
                  />
                </div>

                <input
                  type="submit"
                  value="Register"
                  className="primary-button login-button"
                />
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Register;
