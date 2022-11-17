import { PromoCard} from './'
import '../pages/promociones.css'

export const PromoList = ({listaPromos}) => {

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    listaPromos.map( promo => (
                        <PromoCard 
                            key={ promo.id } 
                            { ...promo }
                        />
                    
                    ))
                }
            </div>
        </>
    )
}