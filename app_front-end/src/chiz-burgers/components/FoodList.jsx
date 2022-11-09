import { useMemo } from 'react';
import { FoodCard } from './';
import { getProductos } from '../helpers/getProductos';

export const FoodList = ({tipo}) => {

    const productos =  useMemo( () => getProductos( tipo ), [ tipo ]);;

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