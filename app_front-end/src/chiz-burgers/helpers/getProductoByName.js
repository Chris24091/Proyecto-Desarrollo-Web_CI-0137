import { getProductos } from "./getProductos";


export const getProductoByName = ( name ) => {

    let productos = getProductos();
    console.log(productos);
    return productos.find(producto => producto.name === name);
}