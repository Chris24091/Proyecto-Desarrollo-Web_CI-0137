import {useNavigate } from 'react-router-dom';
import '../pages/menu.css'
import { getProductoByName } from '../helpers/getProductoByName';
import { getIngredientes } from '../helpers/getIngredientes';

export const FoodCard = ({
    id,
    name,
    price,
    imagen
}) => {

    const producto = getProductoByName(id);
    const ingredientes = getIngredientes(id);

    const navigate = useNavigate();
    const irDetalles = () => {
        navigate(`${name}`, {
            state:{producto:producto, ingredientes:ingredientes}
        });
    }

    return (
            <div className="col d-flex justify-content-center" onClick={irDetalles}>
                <div className="card card-menu" >
                    <img src={ imagen } className="card-img" alt={ name }/>
                    <div className="card-body">
                        <p className='card-name'>{name}</p>
                        <p className='card-price'>{price}</p>
                    </div>
                </div>
            </div>
    )
}
