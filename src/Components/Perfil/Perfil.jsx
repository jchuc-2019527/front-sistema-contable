import React, {useState,useEffect} from 'react'
import './Perfil.css'
import logoP from '../../Shared/img/profile-user.svg';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {url} from '../axiosConnect';


const Perfil = () => {

    const navigate = useNavigate();
    const [perfil, setPerfil] = useState([]);
    const [user, setUser] = useState([]);
    const headers = {
        headers: {
            Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
        }
    }

    useEffect(() => {
        Axios.get(url +'user/profile', headers)
        .then( (res) => {
            console.log(res.data)
        })
        .catch( (err) =>{
            console.log(err, 'Viene el error')
        })
    }, []);

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
           <Link to={'/tareas'}> <a class="btn" >Regresar</a> </Link>
        </div>
    </div>
</body> 
</div>
  )
}

export default Perfil