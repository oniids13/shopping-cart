import { useOutletContext } from "react-router-dom"
import Card from "./Card/Card"

const StoreContent = () => {

    const {products, loading} = useOutletContext()

    return(
        <>
        <Products
        products={products}
        loading={loading}
        />
        </>
    )
}


const Products = ({products, loading}) => {

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
    
    if (loading) {
        return (
            <div className="spinner-border d-flex justify-content-center container" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }


    return (
        <div className='container pt-5'>
        <div className="p-5 text-center bg-body rounded-3 mt-5">
        <h1 className="text-body-emphasis pb-3">Our Products</h1>
        <div className="row store">
        {products.map((item) => {
            return (
                <div className="product-card col-md-4 mb-4" key={item.id}>
                    <Card
                        id={item.id}
                        name={item.title}
                        price={item.price}
                        category={item.category}
                        image={item.image}
                        rating={`${starRating(item.rating.rate)} (${item.rating.count})`}
                    />
                </div>
            )
        })}
        </div>
        </div>
    </div>
    )
}

export default StoreContent