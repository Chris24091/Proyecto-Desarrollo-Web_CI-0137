import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react"
import './navBar.css';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
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
                            to="/"
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
                            to="/"
                        >
                            Contácto
                            <div className="underline"></div>
                        </NavLink>
                </div>
                <div className="navbar-collapse collapse dual-collapse2 d-flex justify-content-end">
                    <button
                        className="Logs"
                        onClick={onLogout}
                    >
                        <span>Iniciar Sesión</span>
                    </button>
                    <button id="menu-button" onClick={showNavBar}>
                        <FaBars />
                    </button>
                </div>
            </nav>
        </>
    )
}