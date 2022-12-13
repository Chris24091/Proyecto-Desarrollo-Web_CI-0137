import { useNavigate } from 'react-router-dom';
import '../pages/menu.css'
import { getProductoByName } from '../helpers/getProductoByName';
import { getIngredientes } from '../helpers/getIngredientes';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { productosApi } from '../../api/productosApi';
import { useEffect } from 'react';

export const FoodCardEditable = ({
    id,
    name,
    price,
    imagen
}) => {

    const producto = getProductoByName(id);
    const ingredientes = getIngredientes(id);

    const navigate = useNavigate();
    const irEditar = () => {
        navigate(`${name}`, {
            state: { producto: producto, ingredientes: ingredientes }
        });
    }

    const EliminarProducto = () => {
        console.log(id);
        productosApi.delete(`Eliminar/${id}`)
            .then(result => {
                const data = result.data;
                console.log(data);
            });
        window.location.reload(false);
    }

    return (
        <div className="col d-flex justify-content-center">
            <div className="card" >
                <img src={imagen} className="card-img" alt={name} />
                <div className="card-body">
                    <p className='card-name'>{name}</p>
                    <p className='card-price'>{price}</p>
                </div>
                <div className='card-bodyMantain'>
                    <div className='row w-100'>
                        <div className='col-6 d-flex justify-content-center'>
                            <Button className='button-editar' onClick={irEditar}>
                                Editar
                            </Button>
                        </div>
                        <div className='col-6 d-flex justify-content-center'>
                            <Button className='button-eliminar' onClick={EliminarProducto}>
                                Eliminar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
