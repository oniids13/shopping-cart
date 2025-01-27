import { useOutletContext } from 'react-router-dom'
import styles from './HomeContent.module.css'
import Card from './Card/Card'
import { Link } from 'react-router-dom'


const HomeContent = () => {

    
    const { products, loading } = useOutletContext()



    return(
        <div className={`${styles.content} pt-5`}>
            <div className='container'>
                <Headline />
                {products.length > 0 && 
                <Featured
                items={products}
                loading={loading} />}
            </div>
        </div>
    )
}







const Headline = () => {
    return (
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
    <h1 className="text-body-emphasis">Welcome to Fake Shop</h1>
    <p className="col-lg-6 mx-auto mb-4 fs-5">
    Where shopping is more than just a click—it's an experience! Explore a wide range of high-quality products curated just for you, all at unbeatable prices. With our user-friendly interface, secure payment options, and lightning-fast delivery, we make your shopping journey effortless and enjoyable. Whether you're looking for the latest trends, daily essentials, or unique finds, we've got everything you need in one place. Shop with confidence and let us bring convenience and joy to your doorstep!"
    </p>
    <button className="btn btn-success px-5 mb-5" type="button">
        <Link className={styles.link} to='/store'>
      Shop Now
        </Link>
    </button>
  </div>
    )
}


const Featured = ({items, loading}) => {
    

    const featuredItems = items.slice(0, 6);

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
        return <p>Loading.....</p>
    }

    return(
        <div className='container'>
            <div className="p-5 text-center bg-body rounded-3 mt-5">
            <h1 className="text-body-emphasis pb-3">Featured Items</h1>
            <div className="row">
            {featuredItems.map((item, index) => {
                const randNum = (Math.random() * 4 + 1).toFixed(1)
                return (
                    <div className="col-md-4 mb-4" key={index}>
                        <Card
                            name={item.title}
                            price={item.price}
                            category={item.category}
                            image={item.image}
                            rating={`${starRating(randNum)} (${randNum})`}
                        />
                    </div>
                )
            })}
            </div>
            </div>
        </div>
    )
    
}








export default HomeContent