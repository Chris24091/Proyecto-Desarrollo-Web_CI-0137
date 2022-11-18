import { Link, NavLink, useNavigate } from 'react-router-dom';
import './home.css'

export const HomePage = () => {

  const navigate = useNavigate();

  const seguirDestacada = () => {
    navigate('/producto/producto1')
  }

  return (
    <>
      <div className="container-md mt-5">
        <h1>Ordena ya!</h1>
        <hr />
        <img className='imagen-destacada' src="src/assets/Images/imagen-home.svg" onClick={ seguirDestacada }/>
      </div>
    </>
  )
}
