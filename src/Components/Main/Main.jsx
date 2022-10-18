import React, {useState} from 'react'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import UserHome from '../UserHome/UserHome'
import Perfil from '../Perfil/Perfil'
import Register from '../Register/Register'
import AdminHome from '../AdminHome/AdminHome'
import RegisterEmpresa from '../RegisterEmpresa/RegisterEmpresa'
const Main = () => {

  const storageToken = localStorage.getItem('token')
  const [token, setToken] = useState((storageToken === null || storageToken === undefined) ? '' : JSON.parse(storageToken));

  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tareas' element={<UserHome />} />
        <Route path='/perfil' element={ <Perfil />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/registerCompany' element={<RegisterEmpresa />} />
        <Route path='/adminHome' element={<AdminHome />} />
        </Routes>
    </div>
 )
}

export default Main