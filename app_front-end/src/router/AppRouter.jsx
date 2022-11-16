import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { AppRoutes } from '../chiz-burgers/routes/appRoutes';
import { useState } from 'react';

export const AppRouter = () => {
  const [usuarioRegistrado, cambiarRegistrado] = useState(false);
  const [nombreUsuario, cambiarNombreUsuario] = useState('');

  return (
    <>

      <Routes>

        <Route path="login" element={
          <LoginPage
            usuarioRegistrado={usuarioRegistrado}
            cambiarRegistrado={cambiarRegistrado}
            nombreUsuario={nombreUsuario}
            cambiarNombreUsuario={cambiarNombreUsuario}
          />
        }
        />


        <Route path="/*" element={
          <AppRoutes
            usuarioRegistrado={usuarioRegistrado}
            cambiarRegistrado={cambiarRegistrado}
            nombreUsuario={nombreUsuario}
            cambiarNombreUsuario={cambiarNombreUsuario}
          />
        }
        />



      </Routes>

    </>
  )
}
