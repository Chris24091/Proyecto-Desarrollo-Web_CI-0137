import React from 'react'

export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
  
    return (
        <div className='paginacion'>
            <nav>
                <ul className='pagination' id="nav-paginacion">
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item' id="paginacion-item">
                            <a onClick={() => paginate(number)} className='page-link' id="paginacion-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
  )
}

