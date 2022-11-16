import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { SmallNav } from "./SmallNav"; 
import { useState } from 'react';
import './navBar.css';

export const Navbar = (
    {
        usuarioRegistrado,
        cambiarRegistrado,
        nombreUsuario,
        cambiarNombreUsuario
    }) => {
    // const [usuarioRegistrado, cambiarRegistrado] = useState(registrado);
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/login', {
            replace: true
        });
    }

    const onLogout = () => {
        cambiarRegistrado(false);
    }

    const showNavBar = () => {
        var navRef = document.getElementById('small-nav');
        var button = document.getElementById('menu-button')
        if (navRef.style.display === "none") {
            navRef.style.display = "flex";
            navRef.style.visibility = "visible";
        } else {
            navRef.style.display = "none";
            navRef.style.visibility = "hidden";
        }
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-sm p-2">

                <Link
                    className="navbar-brand mx-3"
                    to="/"
                >
                    <img
                        src={`src/assets/Images/logo.svg`}
                        alt="Logo"
                    ></img>
                </Link>

                <div className="collapse navbar-collapse w-100 justify-content-center navbar-nav navbar-centro">

                    <NavLink
                        className={({ isActive }) => `nav-item  nav-link mx-1 ${isActive ? 'active' : ''}`}
                        to="/home"
                    >
                        Inicio
                        <div className="underline"></div>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item  mx-1 nav-link  ${isActive ? 'active' : ''}`}
                        to="/menu"
                    >
                        Menú
                        <div className="underline"></div>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item  mx-1 nav-link  ${isActive ? 'active' : ''}`}
                        to="/promociones"
                    >
                        Promociones
                        <div className="underline"></div>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item  mx-1 nav-link  ${isActive ? 'active' : ''}`}
                        to="/"
                    >
                        Cupones
                        <div className="underline"></div>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item  mx-1 nav-link  ${isActive ? 'active' : ''}`}
                        to="/contacto"
                    >
                        Contacto
                        <div className="underline"></div>
                    </NavLink>
                </div>
                {!usuarioRegistrado &&
                    <div className="navbar-collapse collapse dual-collapse2 d-flex justify-content-end">
                        <button
                            className="Logs mx-2"
                            onClick={onLogin}
                        >
                            <span>Iniciar sesión</span>
                        </button>
                    </div>
                }
                {usuarioRegistrado &&
                    <div className="navbar-collapse collapse dual-collapse2 d-flex justify-content-end">
                        <span className='nombre-usuario'>{nombreUsuario}</span>
                        <button
                            className="Logs mx-2"
                            onClick={onLogout}
                        >
                            <span>Cerrar sesión</span>
                        </button>
                    </div>
                }
                <button className='d-sm-none' id="menu-button" onClick={showNavBar}>
                    <FaBars />                     
                </button>
                    <div className='small-nav .d-block .d-sm-none' id='small-nav'>
                        <SmallNav />
                    </div>
            </nav>
        </>
    )
}