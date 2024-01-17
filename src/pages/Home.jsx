import { useState } from "react"
import AlertchangeMoney from "../components/home/AlertChangeMoney"
import Cart from "../components/home/Cart"
import FilterHome from "../components/home/FilterHome"


const Home = () => {

    const [change, setchange] = useState("off")
    const [nequi, setNequi] = useState(false);
    
    return (
        <div className="Home">
            <Cart
                setchange={setchange}
                nequi={nequi}
                setNequi={setNequi}/>


            <AlertchangeMoney
                change={change}
                setchange={setchange}
                nequi={nequi}/>

            <FilterHome/>
        </div>


    )
}

export default Home