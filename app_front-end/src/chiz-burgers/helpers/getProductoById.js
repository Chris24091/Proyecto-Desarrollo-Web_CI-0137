import { productos } from "../data/productos";


export const getProductoById = ( id ) => {

    return productos.find(producto => producto.id === id);
}