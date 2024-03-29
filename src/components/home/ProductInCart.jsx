import './styles/productInCart.css'

const ProductInCart = () => {

    return(

        <div className='product_cart'>

             <section className='cart_product__section'>
                                        
                    <div className='cart_inf_product'>
                        
                        <i className='cat_inf_name_product'></i>

                        <div className='cart_content_inf_product'>
                            <i className='cart_inf_price_product'></i>
                            <i className='cart_inf_cuantity_product'></i>
                        </div>

                        <div className='cart_option_product'>
                            <i className='bx bxs-chevron-up-circle add' ></i>
                            <i className='bx bx-trash delete'></i>
                            <i className='bx bxs-chevron-down-circle subtract'></i>
                        </div>

                    </div>



                </section>
        </div>
    )
}

export default ProductInCart