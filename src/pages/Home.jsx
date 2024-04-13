import CategoryMenu from "../components/CategoryMenu"
import Fooditems from "../components/Fooditems"
import Navbar from "../components/Navbar"
import OrderCart from "../components/OrderCart"


const Home = () => {
  return (
    <>
    <Navbar/>
    <CategoryMenu/>
    <Fooditems />
    <OrderCart/>
    </>
  )
}

export default Home