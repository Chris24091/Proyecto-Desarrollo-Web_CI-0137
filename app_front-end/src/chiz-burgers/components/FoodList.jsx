import { useMemo } from 'react';
import { FoodCard } from './';
import { getProductos } from '../helpers/getProductos';
import '../pages/menu.css'
import { getProductosByTipo } from '../helpers/getProductosByTipo';

export const FoodList = ({listaProductos}) => {

    // const productos = getProductosByTipo(tipo);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                listaProductos.map( producto => (
                    <FoodCard 
                        key={ producto.id } 
                        { ...producto }
                    />
                ))
            }
        </div>
    )
}