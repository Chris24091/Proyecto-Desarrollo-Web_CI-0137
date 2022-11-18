import { Link } from 'react-router-dom';
import '../pages/menu.css'

export const FoodCard = ({ 
    id,
    name,
    price,
}) => {

    const foodImageUrl = `/src/assets/Images/${ id }.svg`;

    // const charactesByHero =  (<p>{ characters }</p>);

    return (
        <Link className='productos-detalles' to={`/producto/${ id }`}>
            <div className="col d-flex justify-content-center">
                <div className="card" >
                    <img src={ foodImageUrl } className="card-img" alt={ name }/>
                    <div className="card-body">
                        <p className='card-name'>{name}</p>
                        <p className='card-price'>{price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
