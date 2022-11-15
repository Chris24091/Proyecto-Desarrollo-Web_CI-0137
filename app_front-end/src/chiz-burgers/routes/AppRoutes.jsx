import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HomePage } from '../pages/HomePage';
import { Menu } from '../pages/MenuPage';
import { Promociones } from '../pages/PromocionesPage';

import { ContactoPage } from '../pages/ContactoPage';

export const AppRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="menu" element={<Menu />} />
                <Route path="promociones" element={<Promociones />} />
                <Route path="contacto" element={<ContactoPage />} />

                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    </>
  )
}
