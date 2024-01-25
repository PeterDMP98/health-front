import './styles/productInformations.css'

const ProductInformations = () => {

    return(
        <div className="Product_informations">
            <div className='product_content_inf'>
                <p className='product_name'>nombre: acetaminofen</p>
                <p className='product_price'>precio: $1000</p>
                <p className='product_price_blister'> precio: $10000</p>
                <p className='product_inf'>500g acetaminofen</p>
                <p className='product_brand'>marca: MK</p>
                <p className='product_amount'>cantidad: 5</p>
            </div>

           <button className='product_btn_add-cart'><i class='bx bx-cart-download' ></i></button>
           <button className='product_btn_inf'><i class='bx bxs-info-circle'></i></button>

        </div>
    )
}

export default ProductInformations