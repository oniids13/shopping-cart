import { useOutletContext , Link} from "react-router-dom"

const CartContent = () => {

    const {cart, setCart, setTotal} = useOutletContext()
    console.log(cart)

    return(
        <Cart 
        cart={cart}
        setCart={setCart}
        setTotal={setTotal}
        />
    )
}



const Cart = ({cart, setCart, setTotal}) => {

    const upddateQuantity = (id, newQty) => {
        setCart((cart) =>
            cart.map((item) =>
                item.id === id ? { ...item, qty: newQty} : item    
            )
        )
    }

    const removeToCart = (id) => {
        setCart((cart) =>
            cart.filter((item) =>
                item.id !== id )
        )
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * item.qty, 0)

    const settingTotalAmt = () => {
        setTotal(totalAmount)
    }

    return (
        <div className="container pt-5">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <div className="empty-cart p-5 text-center bg-body rounded-3 mt-5">
                    <p>There is nothing in your cart :(</p>
                    <button className="btn btn-success"><Link to='/store' className='link'>Go to Store</Link></button>
                </div>
            ) : (
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                        <td scope="row"><Link className="link text-primary" to={`/product/${item.id}`}>{item.title}</Link></td>
                        <td>${item.price}</td>
                        <td>
                            <input id="qty" type="number" value={item.qty} min='1' max='10' onChange={(e) => upddateQuantity(item.id, parseInt(e.target.value))} />
        
                        </td>
                        <td>
                            ${(item.price * item.qty).toFixed(2)}
                            <button className="btn btn-danger mx-3" onClick={() => removeToCart(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </td>
                        </tr>
                    ))}
                    <tr>
                        <td><strong>Total Amount:</strong></td>
                        <td></td>
                        <td></td>
                        <td><strong>${totalAmount.toFixed(2)}</strong></td>
                    </tr>
                </tbody>
                </table>
            )}
            {cart.length === 0 ? '' : (
                <>
                <div className="pt-3">
                    <button className="btn btn-success" onClick={settingTotalAmt}><Link to='/checkout' className="link">Checkout</Link></button>
                </div>
                <div className="pt-3">
                    <button className="btn btn-info"><Link className="link" to='/store'>Continue Shopping</Link></button>
                </div>
                </>
            )}
            
            
        </div>
    )
}



export default CartContent