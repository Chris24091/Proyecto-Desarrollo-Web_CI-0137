import { useEffect, useState } from "react";
import { productosApi } from "../../api/productosApi";
// import { productos } from '../data/productos';


export const getIngredientes = (name) => {

    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {
        productosApi.get(`GetIngredients?productName=${name}`)
        .then(result => {
            const data = result.data;
            setIngredientes(data);
        });
    }, []);
    console.log(ingredientes);
    return ingredientes;
}
