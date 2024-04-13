
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const ProtuctRoutes = ({element}) => {
    const cartItems = useSelector((state) => state.cart.cart);

  return cartItems.length > 0 ? element : <Navigate to="/" />
}

export default ProtuctRoutes