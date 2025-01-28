import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from '../views/Home'
import ErrorPage from '../views/ErrorPage'
import MainContent from './MainContent'
import Store from '../views/Store'
import Cart from '../views/Cart'
import SingleProduct from '../views/SingleProduct'
import CheckOutContent from './Checkout'
import OrderSuccess from '../views/OrderSuccess'

  

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path='/'
    element={<MainContent/>}
    errorElement={<ErrorPage/>}
    >
      <Route index element={<Home/>} />
      <Route path='store' element={<Store />} />
      <Route path='cart' element={<Cart />} />
      <Route path='product/:id' element={<SingleProduct />} />
      <Route path='checkout' element={<CheckOutContent />} />
      <Route path='success' element={< OrderSuccess/>} />
    </Route>
  )
)








  export default router