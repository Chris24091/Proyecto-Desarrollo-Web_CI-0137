import { FoodList } from '../components';
import './menu.css'

export const Menu = () => {
    return (
        <>
            <div className="container-md mt-5">
                <h1>Productos</h1>

                <div class="contenedor-cartas">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <div class="card" >
                                <img src="src/assets/Images/producto1.svg" className="card-img" alt="moody" />
                                <div class="card-body">
                                    <h5 class="card-title">The moody bacon</h5>
                                    <p class="card-text">$ 7.99</p>
                                </div>
                            </div>
                        </div>

                        <div class="col d-flex justify-content-center">
                            <div class="card" >
                                <img src="src/assets/Images/producto2.svg" className="card-img" alt="The double trouble" />
                                <div class="card-body">
                                    <h5 class="card-title">The double trouble</h5>
                                    <p class="card-text">$ 7.99</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <div class="card" >
                                <img src="src/assets/Images/producto3.svg" className="card-img" alt="strips" />
                                <div class="card-body">
                                    <h5 class="card-title">The fire strips</h5>
                                    <p class="card-text">$ 7.99</p>
                                </div>
                            </div>
                        </div>

                        <div class="col d-flex justify-content-center">
                            <div class="card" >
                                <img src="src/assets/Images/producto4.svg" className="card-img" alt="potatoes" />
                                <div class="card-body">
                                    <h5 class="card-title">The crusty potatoes</h5>
                                    <p class="card-text">$ 7.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}