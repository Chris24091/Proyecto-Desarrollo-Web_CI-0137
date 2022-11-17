import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HomePage } from '../pages/HomePage';
import { Menu } from '../pages/MenuPage';
import { Promociones } from '../pages/PromocionesPage';
import { ProductoPage } from '../pages/ProductoPage'

import { ContactoPage } from '../pages/ContactoPage';

export const AppRoutes = (
  {
    usuarioRegistrado,
    cambiarRegistrado,
    nombreUsuario,
    cambiarNombreUsuario
  }) => {
  return (
    <>
      <Navbar  
            usuarioRegistrado={usuarioRegistrado}
            cambiarRegistrado={cambiarRegistrado}
            nombreUsuario={nombreUsuario}
            cambiarNombreUsuario={cambiarNombreUsuario}
      />

      <div className="container">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="promociones" element={<Promociones />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="producto/:id" element={<ProductoPage />}/>

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  )
}

