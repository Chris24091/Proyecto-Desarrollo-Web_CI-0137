import { useMemo } from 'react';
import { FoodCard } from './';
import { getProductos } from '../helpers/getProductos';
import '../pages/menu.css'

export const FoodList = ({tipo}) => {

    const productos = getProductos();

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                productos.map( producto => (
                    <FoodCard 
                        key={ producto.id } 
                        { ...producto }
                    />
                ))
            }
        </div>
    )
}