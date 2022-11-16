import { NavLink } from 'react-router-dom';
import './navBar.css';

export const SmallNav = () => {
    return (
        <>
            <nav className="small-navbar navbar-expand-sm p-2">
                <div className="list-group">
                    
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
                            to="/contacto"
                        >
                            Contacto
                            <div className="underline"></div>
                        </NavLink>
                </div>
            </nav>
        </>
    )
}