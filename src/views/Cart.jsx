import { useOutletContext } from "react-router-dom"

const Cart = () => {

    const {cart} = useOutletContext()

    console.log(cart)

    return(
        <h1>Sample Cart</h1>
    )
}


export default Cart