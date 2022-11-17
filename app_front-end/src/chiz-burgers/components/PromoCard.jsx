import '../pages/promociones.css'

export const PromoCard = ({
    id,
    precio,
    items
}) => {

    return (
        <div className="col d-flex justify-content-center">
                        <div className="card-promo" >
                            <img src="" className="card-img" alt="" />
                            <div className="card-body-promo">
                                <div className='card-data'>
                                    <p className='card-promo-name'>Promo #{id}</p>
                                    <ul>
                                        <li>{items[0]}</li>
                                        <li>{items[1]}</li>
                                        <li>{items[2]} </li>
                                    </ul>
                                </div>
                                <div className='price'>
                                    <p className='card-price'>Precio:</p>
                                    <p className='card-price-number'>{precio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}