import styles from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({name, image, price, category, rating, id}) => {
    return (
        <div className={`${styles.card} card`} style={{ width: "18rem" }}>
            <div className={`${styles.centerImg} pt-3`}>
                <img src={image} className={`${styles.productImage} card-img-top`} alt={name} />
            </div>
            <div className={`${styles.cardBody} card-body`}>
                <p className="card-title fs-5">{name}</p>
                <p><b>{category}</b></p>
                <p>{rating}</p>
                <div className={styles.priceCart}>
                    <h5><strong><em>${price}</em></strong></h5>
                    <button className='btn btn-primary btm-sm'>
                    <Link className='link' to={`/product/${id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                        </svg>
                    </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}





export default Card