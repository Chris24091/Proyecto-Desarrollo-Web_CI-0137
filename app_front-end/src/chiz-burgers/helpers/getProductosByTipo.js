// import { productos } from "../data/productos";

import { getProductos } from "./getProductos";

export const getProductosByTipo = ( tipo = '' ) => {

    tipo = tipo.toLocaleLowerCase().trim();
    
    let productos = getProductos();
    // if ( tipo.length === 0 ) return [];

    const byTipo = productos.filter(
        producto => producto.type.toLocaleLowerCase().includes( tipo )
    );
    const byName = productos.filter(
        producto => producto.name.toLocaleLowerCase().includes( tipo ) 
    );

    let result = [...new Set([...byTipo,...byName])];

    return result;
}