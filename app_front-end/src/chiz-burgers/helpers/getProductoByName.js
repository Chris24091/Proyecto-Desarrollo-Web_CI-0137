import { getProductos } from "./getProductos";


export const getProductoByName = ( id ) => {

    let productos = getProductos();
    return productos.find(producto => producto.id === id);
}