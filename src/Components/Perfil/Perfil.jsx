import React from 'react'
import './Perfil.css'
import logoP from '../../Shared/img/profile-user.svg';

const Perfil = () => {
  return (
    <div>
   <body class="profile">
    <div class="card">
        <div class="img">
            <img src={logoP} alt=""/>
        </div>
        <div class="content">
            <h2>Michael Daniel</h2>
            <p>Contador</p>
            <div class="center">
                <div class="box">
                    <h1>Correo</h1>
                    <p>ejemplo@123.com</p>
                </div>
                <div class="box">
                    <h1>Empresa</h1>
                    <p>Nombre Empresa</p>
                </div>
            </div>
            <a  class="btn" >Regresar</a>
        </div>
    </div>
</body> 
</div>
  )
}

export default Perfil