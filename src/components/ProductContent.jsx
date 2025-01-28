import { useEffect, useState } from "react"
import { useOutletContext, useParams, Link } from "react-router-dom"


const ProductContent = () => {
    const { cart, setCart } = useOutletContext()
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setProduct(data)
        }

        fetchProductDetails()
    },[id])

    return (
        <Product
        cart={cart}
        setCart={setCart}
        product={product}
        count={count}
        setCount={setCount}
        />
    )
}


const Product = ({cart, setCart, product, count, setCount}) => {

    
    

    if(!product) {
        return (
            <div className="spinner-border d-flex justify-content-center container" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    const handleIncrement = () => {
        setCount((count) => count + 1)
        if (count >= 10) {
            setCount(10)
        }
    }

    const handleDecrement = () => {
        setCount((count) => count - 1)
        if (count <= 0) {
            setCount(0)
        }
    }

    const addToCart = () => {

        const existingProduct = cart.find((item) => item.id === product.id)

        if (existingProduct) {
            setCart((cart) => 
                cart.map((item) =>
                    item.id === product.id
                        ? {...item, qty: item.qty + count}
                        : item
                )
            )
        } else {
            setCart((cart) => [...cart, {...product, qty: count}])
        }
    }

    return (
        <>
        <div className="container  pt-5">
            <div className="row bg-body rounded-3 p-5 product">
                <div className="img-holder col-6">
                    <img className="product-img" src={product.image} alt={product.title} />
                </div>
                <div className="col-6">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{starRating(product.rating.rate)} ({product.rating.count})</p>
                    <h4>${product.price}</h4>
                    <div className="product-counter mt-3">
                        <button className="btn btn-sm btn-warning" onClick={handleDecrement}>-</button>
                        <input type="number" name="qty" id="qty" max={10} min={0} value={count} />
                        <button className="btn btn-sm btn-warning" onClick={handleIncrement}>+</button>
                        <button onClick={addToCart} className="btn btn-success mx-3">
                            <Link className="link" to='/cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </Link>
                        </button>
                    </div>
                    <button className="btn btn-primary mt-5"><Link className="link" to='/store'>Back to Store</Link></button>
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


export default ProductContent