import React, { useState, useEffect } from "react";
import "./Perfil.css";
import logoP from "../../Shared/img/profile-user.svg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { url } from "../axiosConnect";

const Perfil = () => {
  const [perfil, setPerfil] = useState([]);
  const [company, setCompany] = useState([]);
  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    Axios.get(url + "user/profile", headers)
      .then((res) => {
        setPerfil(res.data.usuario[0]);
        setCompany(res.data.usuario[1]);
      })
      .catch((err) => {
        console.log(err, "Viene el error");
      });
  }, [perfil, company]);

  return (
    <div>
      <body className="profile">
        <div className="card">
          <div className="img">
            <img src={logoP} alt="logo" />
          </div>
          <div className="content">
            <h1>Contador</h1>
            <h2>{perfil.nombre}</h2>
            <div className="center">
              <div className="box">
                <h1>Correo</h1>
                <p className="perfil">{perfil.correo}</p>
              </div>
              <div className="box">
                <h1>Empresa</h1>
                <p className="perfil">{company.nombreEmpresa}</p>
              </div>
            </div>
            <Link to={"/tareas"}>
              <a className="btn">Regresar</a>
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Perfil;
