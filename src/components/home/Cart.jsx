import ProductInCart from './ProductInCart';
import './styles/cart.css'

const Cart = ({setchange, nequi, setNequi}) => {
    


    const handleClickBuy = () =>{
        setchange("on")
    }

    const handleChangeNequi = () => {
        setNequi(!nequi);
      };

    return(
        <article className="Cart">
            <h2 className='cart_title'>BUY</h2>

            <ProductInCart/>

            <section className='cart__footer'>


                <section className='product__total'>
                    <p className='product_total_acount'></p>
                    <p className='product_total_total'></p>
                </section>

                <form className={`cart_payment ${nequi ? 'off' : 'on'}`}>
                    <input className='cart_change_payment_input' type="text" placeholder='dinero'/>
                </form>

                <form className='cart_nequi' >
                <input
                    onChange={handleChangeNequi}
                    className="cart_nequi_input"
                    type="checkbox"
                    checked={nequi}
                />
                </form>

                <button onClick={handleClickBuy} className='product__btn'>
                    <i className='bx bx-cart-alt' > Buy</i>
                </button>
            </section>

        </article>
    )
}

export default Cart;