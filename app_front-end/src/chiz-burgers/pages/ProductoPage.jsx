import {useLocation} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './producto.css'


export const ProductoPage = ( {

} ) => {
    const location = useLocation();
    const foodImageUrl = `/src/assets/Images/${location.state.producto.name}.svg`;

    return (
        <>
            <h1 className="nombre-producto">{location.state.producto.name}</h1>
            <hr/>
            <div className="producto-card row">
                <img src={foodImageUrl} className="card-img-producto col d-flex justify-content-start" alt={location.state.producto.name} />
                <div className="ingredientes col">
                    <h2 className="ingredientes-titulo">Ingredientes</h2>
                    { <ul className="lista-ingredientes">
                        {
                            location.state.ingredientes?.map((ingrediente, ingID) => (
                                <li key={ingID} className="ingrediente">{ingrediente}</li>
                            ))

                            // console.log(location.state.ingredientes)

                        }
                    </ul> }
                </div>
                <div className="desc-producto col">
                    <div className="cal">
                        <p className="calorias">{location.state.producto.calories} Cal</p>
                    </div>
                    <div className="precio-prod">
                        <p className="precio-titulo">Precio:</p>
                        <p className="precio-producto">{location.state.producto.price}</p>
                    </div>
                </div>
            </div>
            <div className='link-productos text-center'>
                        <NavLink to="/menu">
                            Volver al menú
                        </NavLink>
                    </div>
        </>
    )
}