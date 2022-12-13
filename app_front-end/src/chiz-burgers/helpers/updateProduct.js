import { productosApi } from "../../api/productosApi";


export const updateProduct = async (producto) => {
    productosApi.put("Editar", producto)
        .then((response) => {
            console.log(response);
        }).catch((err) => console.log(err));;
}
