import { useParams } from "react-router-dom";
import { getProductoById } from "../helpers/getProductoById"
import './producto.css'


export const ProductoPage = ({

}) => {
    const { id } = useParams();
    const foodImageUrl = `/src/assets/Images/${id}.svg`;
    const producto = getProductoById( id );
    return (
        <>
            <h1 className="nombre-producto">{producto.name}</h1>
            <hr/>
            <div className="producto-card">
                <img src={foodImageUrl} className="card-img-producto" alt={producto.name} />
                <div className="ingredientes">
                    <h2 className="ingredientes-titulo">Ingredientes</h2>
                    <ul className="lista-ingredientes">
                        {
                            producto.ingredientes.map((ingrediente, ingID) => (
                                <li key={ingID} className="ingrediente">{ingrediente}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="desc-producto">
                    <div className="cal">
                        <p className="calorias">{producto.calorias}</p>
                    </div>
                    <div className="precio-prod">
                        <p className="precio-titulo">Precio:</p>
                        <p className="precio-producto">{producto.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}