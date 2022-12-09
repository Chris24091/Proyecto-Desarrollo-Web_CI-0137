import { useParams } from "react-router-dom";
import { getProductoByName } from "../helpers/getProductoByName"
import './producto.css'


export const ProductoPage = ({

}) => {
    const { name } = useParams();
    const foodImageUrl = `/src/assets/Images/${name}.svg`;
    const producto = getProductoByName( name.toString() );

    return (
        <>
            <h1 className="nombre-producto">{producto.name}</h1>
            <hr/>
            <div className="producto-card row">
                <img src={foodImageUrl} className="card-img-producto col d-flex justify-content-start" alt={producto.name} />
                <div className="ingredientes col">
                    <h2 className="ingredientes-titulo">Ingredientes</h2>
                    <ul className="lista-ingredientes">
                        {
                            producto.ingredientes.map((ingrediente, ingID) => (
                                <li key={ingID} className="ingrediente">{ingrediente}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="desc-producto col">
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