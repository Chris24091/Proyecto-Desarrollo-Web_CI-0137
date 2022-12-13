// import { productos } from "../data/productos";

export const getProductosByTipo = ( tipo = '', productos ) => {

    tipo = tipo.toLocaleLowerCase().trim();

    const byTipo = productos.filter(
        producto => producto.type.toLocaleLowerCase().includes( tipo )
    );
    const byName = productos.filter(
        producto => producto.name.toLocaleLowerCase().includes( tipo ) 
    );

    let result = [...new Set([...byTipo,...byName])];

    return result;
}