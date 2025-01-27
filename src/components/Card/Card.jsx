import styles from './Card.module.css'


const Card = ({name, image, price, category, rating}) => {
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                            </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}





export default Card