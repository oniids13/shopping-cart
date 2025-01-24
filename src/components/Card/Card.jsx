import styles from './Card.module.css'


const Card = ({name, image, price, category}) => {
    return (
        <div className={`${styles.card} card`} style={{ width: "18rem" }}>
            <div className={`${styles.centerImg} pt-3`}>
                <img src={image} className={`${styles.productImage} card-img-top`} alt={name} />
            </div>
            <div className="card-body">
                <p className="card-title">{name}</p>
                <p>${price}</p>
                <p><b>{category}</b></p>
                <p>{starRating(3)}</p>
                <button className='btn btn-primary btm-sm'>Add to Cart</button>
            </div>
        </div>
    )
}



const starRating = (rating) => {

    let star;
    switch(rating) {
        case 5:
            star = '⭐⭐⭐⭐⭐'    
            break
        case 4:
            star = '⭐⭐⭐⭐ '
            break
        case 3:
            star = '⭐⭐⭐'
            break
        case 2:
            star = '⭐⭐'
            break
        case 1:
            star = '⭐' 
    }

    return star
}

export default Card