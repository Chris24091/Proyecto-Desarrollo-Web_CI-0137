import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HomePage } from '../pages/HomePage';
import { Menu } from '../pages/MenuPage';
import { Promociones } from '../pages/PromocionesPage';
import { ProductoPage } from '../pages/ProductoPage'

import { ContactoPage } from '../pages/ContactoPage';
import { Mantenimiento } from '../pages/MantenimientoPage';
import { AgregarProducto } from '../pages/AgregarProducto';
import { EditarProducto } from '../pages/EditarProducto';

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
          <Route path="menu/:name" element={<ProductoPage />}/>
          <Route path="mantenimiento" element={<Mantenimiento />}/>
          <Route path="mantenimiento/agregar" element={<AgregarProducto />}/>
          <Route path="mantenimiento/:name" element={<EditarProducto />}/>

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  )
}

