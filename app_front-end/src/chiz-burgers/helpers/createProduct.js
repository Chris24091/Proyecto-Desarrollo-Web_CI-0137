import { useEffect, useState } from "react";
import { productosApi } from "../../api/productosApi";
// import { productos } from '../data/productos';


export const createProduct = async (producto) => {
    productosApi.post("AgregarProducto", producto)
        .then((response) => {
            console.log(response);
        }).catch((err) => console.log(err));;
}
