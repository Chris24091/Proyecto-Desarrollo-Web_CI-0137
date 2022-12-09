import { FoodCard } from './';
import '../pages/menu.css'

export const FoodList = ({listaProductos}) => {


    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                listaProductos.map( producto => (
                    <FoodCard 
                        key={ producto.name } 
                        { ...producto }
                    />
                ))
            }
        </div>
    )
}