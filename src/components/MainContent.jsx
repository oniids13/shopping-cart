import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet} from "react-router-dom";
import { useState, useEffect } from 'react'



const MainContent = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
  
      useEffect(() => {
          const productsFetch = async () => {
              try {
                  const response = await fetch("https://fakestoreapi.com/products");
                  const data = await response.json();
                  setProducts(data);
                  setLoading(false)
                } catch (error) {
                  console.error("Error fetching products:", error);
                  setLoading(false)
                }
          }
  
          productsFetch()
      }, [])



    return (
        <>
            <Header />
            <div className="main">
            <Outlet context={{products, loading}}/>
            </div>
            <Footer />
       
        </>
    )
}



export default MainContent