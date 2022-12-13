import { useEffect, useState } from "react";
import { productosApi } from "../../api/productosApi";
// import { productos } from '../data/productos';


export const getIngredientes = (name) => {

    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {
        productosApi.get(`GetIngredientes/${name}`)
        .then(result => {
            const data = result.data;
            setIngredientes(data);
        });
    }, []);
    return ingredientes;
}
