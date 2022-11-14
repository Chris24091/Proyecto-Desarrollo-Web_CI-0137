import { FoodList } from '../components';
import './menu.css'

export const Menu = () => {
    return (
        <>
            <div className="container-md mt-5">
                <h1>Productos</h1>
                <hr />
                <FoodList/>
            </div>
        </>
    )
}

