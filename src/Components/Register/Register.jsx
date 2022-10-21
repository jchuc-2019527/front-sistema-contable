import React from "react";
import "./Register.css";
// import { useParams } from "react-router-dom";

const Register = () => {
  // const { idEmpre } = useParams();
  // console.log(idEmpre);
  return (
    <div>
      <body className="register">
        <div className="container">
          <form>
            <div className="form first">
              <div className="details personal">
                <span className="title">Agregar un usuario</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Nombre Empresa</label>
                    <input
                      type="text"
                      placeholder="Nombre de empresa"
                      id="nombreEmpresa"
                      name="nombreEmpresa"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Nombre</label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      id="nombre"
                      name="nombre"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Apellido</label>
                    <input
                      type="text"
                      placeholder="Apellido"
                      id="apellido"
                      name="apellido"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Correo</label>
                    <input
                      type="email" 
                      placeholder="Correo"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"  
                      name="username"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      id="contraseña"
                      name="contraseña"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="sumbit">
                  <span className="btnText">Agregar</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Register;
