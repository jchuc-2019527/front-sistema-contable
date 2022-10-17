import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
   <div>
    <body>
    <div className="inicio">
    <div class="head">

        <nav class="navbar">
           <Link to='/login'> <a>Iniciar Sesiòn</a>
           </Link>
        </nav>

    </div>

    <header class="content header">
        <h2 class="title">Bienvenido</h2>
        <p>
            Bienvenido al sistema contable, para iniciar sesiòn dirìgase al botòn iniciar 
            sesiòn que se encuentra en la parte superior izquierda de la pàgina
        </p>
    </header>

    <section class="content sau">

        <h2 class="title">Funciones</h2>
        <div class="box-container">

            <div class="box">
                <i class="fab fa-angular"></i>
                <h3>Contabilidad</h3>
                <p>Funciones respectivas a la contabilidad</p>
            </div>
            <div class="box">
                <i class="fab fa-apple"></i>
                <h3>Registros de Cuentas</h3>
                <p>Llevar registro de las diferentes tipos de cuentas</p>
            </div>
            <div class="box">
                <i class="fab fa-android"></i>
                <h3>Reportes de Cuentas</h3>
                <p>Poder crear un reporte de cuentas por medio de PDF</p>
            </div>

        </div>

    </section>
</div>
</body>
   </div>
  );
};

export default Home;
