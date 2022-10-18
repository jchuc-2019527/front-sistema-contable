import React, {useState} from 'react'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import UserHome from '../UserHome/UserHome'
import Perfil from '../Perfil/Perfil'
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
        </Routes>
    </div>
 )
}

export default Main