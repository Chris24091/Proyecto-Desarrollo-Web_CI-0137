import { useParams } from "react-router-dom";
import { getProductoById } from "../helpers/getProductoById"
import './producto.css'


export const ProductoPage = ({

}) => {
    const { id } = useParams();
    const foodImageUrl = `src/assets/Images/${id}.svg`;
    const producto = getProductoById( id );
    return (
        <>
            <h1>{producto.name}</h1>
            <div className="producto-card">
                <img src={foodImageUrl} className="card-img" alt={producto.name} />
                <div className="ingredientes">
                    <h2>Ingredientes</h2>
                    <ul>
                        {
                            producto.ingredientes.map((ingrediente, ingID) => (
                                <li key={ingID}>{ingrediente}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="desc-producto">
                    <div className="cal">
                        <p>{producto.calorias}</p>
                    </div>
                    <div>
                        <p>Precio:</p>
                        <p>{producto.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}