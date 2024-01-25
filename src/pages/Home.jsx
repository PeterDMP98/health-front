import { useState } from "react"
import AlertchangeMoney from "../components/home/AlertChangeMoney"
import Cart from "../components/home/Cart"
import FilterHome from "../components/home/FilterHome"
import '../components/home/styles/home.css'
import ProductInformations from "../components/home/ProductInformations"


const Home = () => {

    const [change, setchange] = useState("off")
    const [nequi, setNequi] = useState(false);
    
    return (
        <div className="Home">
            
        <div className="home_content">
        <FilterHome />
            <section className="home_cotent_product">
                <h2 className="home_product_title">Productos</h2>
                
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
                <ProductInformations/>
            
            </section>

        </div>
        
            <AlertchangeMoney
                change={change}
                setchange={setchange}
                nequi={nequi}/>

            <Cart
                setchange={setchange}
                nequi={nequi}
                setNequi={setNequi}/>

        </div>


    )
}

export default Home