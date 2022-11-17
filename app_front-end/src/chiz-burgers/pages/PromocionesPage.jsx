import { PromoList } from '../components';
import { getPromos } from '../helpers/getPromos';
import './promociones.css'

export const Promociones = () => {
    const promos = getPromos();

    return (
        <>
            <div className="container-md mt-5">
                <h1>Promociones</h1>
                <hr />
                <div className='contenedor-promo'>
                    <img className='imagen-logo' src="src/assets/Images/promo0.svg" />
                    <div className="desc-promo">
                        <p className='texto-promo'>Tres classic patties por:</p>
                        <p className='precio-promo'> $7.99</p>
                    </div>
                </div>
                <PromoList listaPromos={promos}/>
            </div>
        </>
    )
}
