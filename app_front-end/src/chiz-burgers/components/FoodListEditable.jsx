import { FoodCardEditable } from './FoodCardEditable'
import '../pages/menu.css'

export const FoodListEditable = ({listaProductos}) => {


    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                listaProductos.map( producto => (
                    <FoodCardEditable 
                        key={ producto.id } 
                        { ...producto }
                    />
                ))
            }
        </div>
    )
}