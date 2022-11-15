import './promociones.css'

export const Promociones = () => {
    return (
        <>
            <div className="container-md mt-5">
                <h1>Promociones</h1>
                <hr />
                <div className='contenedor-promo'>
                    <img className='imagen-logo' src="src/assets/Images/promo1.svg" />
                    <div className="desc-promo">
                        <p className='texto-promo'>Tres classic patties por:</p>
                        <p className='precio-promo'> $7.99</p>
                    </div>
                </div>
                <div className="row rows-cols-1 row-cols-md-3 g-3">
                    <div className="col d-flex justify-content-center">
                        <div className="card-promo" >
                            <img src="" className="card-img" alt="" />
                            <div className="card-body-promo">
                                <div className='card-data'>
                                    <p className='card-name'>Promo #1</p>
                                    <ul>
                                        <li>Dos moody bacon's</li>
                                        <li>Unas crusty potatoes</li>
                                        <li>Una bebida regular </li>
                                    </ul>
                                </div>
                                <div className='price'>
                                    <p className='card-price'>Precio:</p>
                                    <p className='card-price-number'>$12.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="card-promo" >
                            <img src="" className="card-img" alt="" />
                            <div className="card-body-promo">
                                <div className='card-data'>
                                    <p className='card-name'>Promo #2</p>
                                    <ul>
                                        <li>Un chiz sandwich</li>
                                        <li>Dos bello portobello</li>
                                        <li>Unos tasty rings </li>
                                    </ul>
                                </div>
                                <div className='price'>
                                    <p className='card-price'>Precio:</p>
                                    <p className='card-price-number'>$15.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="card-promo" >
                            <img src="" className="card-img" alt="" />
                            <div className="card-body-promo">
                                <div className='card-data'>
                                    <p className='card-name'>Promo #3</p>
                                    <ul>
                                        <li>Tres fire strips's</li>
                                        <li>Tres crusty potatoes</li>
                                        <li>Tres bebidas regulares </li>
                                    </ul>
                                </div>
                                <div className='price'>
                                    <p className='card-price'>Precio:</p>
                                    <p className='card-price-number'>$16.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
