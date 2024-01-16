import { useState } from "react"
import AlertchangeMoney from "../components/home/AlertChangeMoney"
import Cart from "../components/home/cart"
import Header from "../components/shared/header/Header"


const Home = () => {

    const [change, setchange] = useState("off")
    
    return (
        <div>
            <Header/>
            <div className="cart">
                <Cart
                    setchange={setchange}/>
            </div>

            <AlertchangeMoney
                change={change}
                setchange={setchange}/>
        </div>
    )
}

export default Home