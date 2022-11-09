import { Link } from 'react-router-dom';

export const FoodCard = ({ 
    id,
    name,
    price,
}) => {

    const foodImageUrl = `src/assets/Images/${ id }.svg`;

    // const charactesByHero =  (<p>{ characters }</p>);

    return (
            <div class="card">
                <img src={ foodImageUrl } className="card-img" alt={ name }/>
                <div class="card-body">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </div>
    )
}
