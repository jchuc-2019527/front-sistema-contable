import React from "react";
import "./Register.css";
import { useParams } from "react-router-dom";

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
                      placeholder="Ingrese el nombre"
                      id="nombreEmpresa"
                      name="nombreEmpresa"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Nombre Empresa</label>
                    <input
                      type="text"
                      placeholder="Ingrese el nombre"
                      id="nombreComercial"
                      name="nombreComercial"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Direcciòn Empresa</label>
                    <input
                      type="text"
                      placeholder="Ingrese la Direcciòn"
                      id="direccionEmpresa"
                      name="direccionEmpresa"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>NIT Empresa</label>
                    <input
                      type="text"
                      placeholder="Ingrese el NIT"
                      id="NITEmpresa"
                      name="NITEmpresa"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Porcentaje IVA</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="Ingrese el Porcentaje"
                      id="porcentajeIVA"
                      name="porcentajeIVA"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="sumbit">
                  <span className="btnText">Agregar</span>
                  <i className="uil uil-navigator"></i>
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
