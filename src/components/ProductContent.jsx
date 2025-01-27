import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Product = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setProduct(data)
        }

        fetchProductDetails()
    },[id])

    if(!product) {
        return <p>Loading.....</p>
    }

    return (
        <>
        <div className="container  pt-5">
            <div className="row bg-body rounded-3 p-5">
                <div className="img-holder col-6">
                    <img className="product-img" src={product.image} alt={product.title} />
                </div>
                <div className="col-6">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{starRating(product.rating.rate)} ({product.rating.count})</p>
                    <h4>${product.price}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

const starRating = (rating) => {

    let star;
    switch(Math.floor(rating)) {
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


export default Product