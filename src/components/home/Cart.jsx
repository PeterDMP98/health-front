import ProductInCart from './ProductInCart';
import './styles/cart.css'

const Cart = ({setchange}) => {

    const handleClickBuy = () =>{
        setchange("on")
    }

    return(
        <article className="Cart">
            <h2 className='cart_title'>BUY</h2>

            <ProductInCart/>

            <section className='cart__footer'>


                <section className='product__total'>
                    <p>Cantidad: <i>4</i></p>
                    <p>Total: <i>$10.000</i></p>
                </section>

                <form className='cart_payment'>
                    <input className='cart_change_payment_input' type="text" placeholder='dinero'/>
                </form>

                <button onClick={handleClickBuy} className='product__btn'>
                    <i className='bx bx-cart-alt' > Buy</i>
                </button>
            </section>

        </article>
    )
}

export default Cart;