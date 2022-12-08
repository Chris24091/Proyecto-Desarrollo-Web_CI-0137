import { FoodList } from '../components';
import { Formik, Form, Field } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import './menu.css'
import { useState, useEffect } from 'react';
import { getProductosByTipo } from '../helpers/getProductosByTipo';
import { useForm } from '../../hooks/useForm';
import { getProductos } from '../helpers/getProductos';
import { NavLink } from 'react-router-dom';
import { Pagination } from '../components/Pagination';

export const Menu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const productos = getProductosByTipo(q);
    const allProducts = getProductos();

    const showError = (q.length > 0) && productos.length === 0;

    const showAll = productos.length < allProducts.length;

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className="container-md mt-5">
                <div className='row'>
                    <div className='col-6'>
                        <h1>Productos</h1>
                    </div>
                    <div className='col-6 d-flex justify-content-end align-items-center'>
                        <form className='form-inline' onSubmit={onSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Buscar producto"
                                className="form-control"
                                name="searchText"
                                autoComplete="on"
                                value={searchText}
                                onChange={onInputChange}
                            />

                            <button className="mx-1 boton-buscar">
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
                <FoodList listaProductos={currentProducts} />
                <Pagination 
                    productsPerPage={productsPerPage} 
                    totalProducts={allProducts.length} 
                    paginate={paginate}
                />

                <div style={{ display: showError ? '' : 'none' }}>
                    <div className="alert alert-danger animate__animated animate__fadeIn text-center">
                        No se encontraron productos con <b>{q}</b>
                    </div>
                </div>
                <div style={{ display: showAll ? '' : 'none' }}>
                    <div className='link-productos text-center'>
                        <NavLink to="/menu">
                            Ver todos los productos
                        </NavLink>
                    </div>
                </div>


            </div>
        </>
    )
}

