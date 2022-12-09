import {useNavigate } from 'react-router-dom';
import '../pages/menu.css'
import { getProductoByName } from '../helpers/getProductoByName';
import { getIngredientes } from '../helpers/getIngredientes';

export const FoodCard = ({ 
    name,
    price,
}) => {

    const foodImageUrl = `/src/assets/Images/${ name }.svg`;

    const producto = getProductoByName(name);
    const ingredientes = getIngredientes(name);

    const navigate = useNavigate();
    const irDetalles = () => {
        navigate(`/producto/${name}`, {
            state:{producto:producto, ingredientes:ingredientes}
        });
    }

    return (
            <div className="col d-flex justify-content-center" onClick={irDetalles}>
                <div className="card" >
                    <img src={ foodImageUrl } className="card-img" alt={ name }/>
                    <div className="card-body">
                        <p className='card-name'>{name}</p>
                        <p className='card-price'>{price}</p>
                    </div>
                </div>
            </div>
    )
}
