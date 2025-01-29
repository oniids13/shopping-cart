import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet} from "react-router-dom";
import { useState, useEffect } from 'react'



const MainContent = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [featuredItems, setFeaturedItems] = useState([])
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
  
      useEffect(() => {
          const productsFetch = async () => {
              try {
                  const response = await fetch("https://fakestoreapi.com/products");
                  const data = await response.json();
                  setProducts(data);
                  setLoading(false)
                  generateRandomProduct(data)
                } catch (error) {
                  console.error("Error fetching products:", error);
                  setLoading(false)
                }
          }
  
          productsFetch()
      }, [])

    const generateRandomProduct = (items) => {
        const shuffled = [...items].sort(() => 0.5 - Math.random())
        const randomItems = shuffled.slice(0,6)
        setFeaturedItems(randomItems)
    }

    console.log(featuredItems)
    return (
        <>
            <div className="wrapper">
                <Header
                cart={cart} />
                <div className="main">
                <Outlet context={{products, loading, featuredItems, cart, setCart, setTotal, total}}/>
                </div>
                <Footer />
            </div>
        </>
    )
}



export default MainContent