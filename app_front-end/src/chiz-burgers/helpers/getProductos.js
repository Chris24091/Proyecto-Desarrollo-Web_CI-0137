// import { useEffect } from 'react';
// import { AxiosResponse } from 'axios';
import axios from "axios";
import { useEffect, useState } from "react";
import { productosApi } from "../../api/productosApi";
// import { productos } from '../data/productos';


export const getProductos = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        productosApi.get(`GetProductos`)
        .then(result => {
            const data = result.data;
            setProductos(data);
        });
    }, []);
    return productos;
}
