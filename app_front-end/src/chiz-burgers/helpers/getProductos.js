import { productos } from '../data/productos';


export const getProductos = ( tipo ) =>{
    return productos.find(producto => producto.tipo === tipo);
}
