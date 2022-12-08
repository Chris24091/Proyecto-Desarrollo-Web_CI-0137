import axios from "axios";

export const productosApi = axios.create( {
    baseURL: 'https://localhost:49153/Products'
});