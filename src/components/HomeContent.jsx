import { useOutletContext } from 'react-router-dom'
import Card from './Card/Card'
import { Link } from 'react-router-dom'


const HomeContent = () => {

    
    const { featuredItems, loading } = useOutletContext()



    return(
        <div className='pt-5'>
            <div className='container'>
                <Headline />
                {featuredItems.length > 0 && 
                <Featured
                items={featuredItems}
                loading={loading} />}
            </div>
        </div>
    )
}







const Headline = () => {
    return (
        <div className='cover position-relative text-center text-muted bg-body border border-dashed rounded-5'>
            <div className="col-6 left-cover ">
                <h1 className="text-body-emphasis pt-5">Welcome to Fake Shop</h1>
                <p className="headline-text col-lg-6 mx-auto mb-4">
                Where shopping is more than just a click—it's an experience! Explore a wide range of high-quality products curated just for you, all at unbeatable prices. With our user-friendly interface, secure payment options, and lightning-fast delivery, we make your shopping journey effortless and enjoyable. Whether you're looking for the latest trends, daily essentials, or unique finds, we've got everything you need in one place. Shop with confidence and let us bring convenience and joy to your doorstep!"
                </p>
                <button className="btn btn-success px-5 mb-5" type="button">
                    <Link className='link' to='/store'>
                        Shop Now
                    </Link>
                </button>
            </div>
            <div className="col-6">
                <img className='cover-pic' src="/images/cover.jpg" alt="" />
            </div>
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
            <div className="p-5 text-center bg-body rounded-5 mt-5 border border-dashed">
            <h1 className="text-body-emphasis pb-3">Featured Items</h1>
            <div className="row store">
            {featuredItems.map((item) => {

                return (
                    <div className="col-md-4 mb-4" key={item.id}>
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








export default HomeContent