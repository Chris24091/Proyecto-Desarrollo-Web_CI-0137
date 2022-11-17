import { productos } from "../data/productos";


export const getProductosByTipo = ( tipo = '' ) => {

    tipo = tipo.toLocaleLowerCase().trim();
    
    // if ( tipo.length === 0 ) return [];

    const byTipo = productos.filter(
        producto => producto.tipo.toLocaleLowerCase().includes( tipo ) 
    );
    const byName = productos.filter(
        producto => producto.name.toLocaleLowerCase().includes( tipo ) 
    );

    let result = [...new Set([...byTipo,...byName])];

    return result;
}