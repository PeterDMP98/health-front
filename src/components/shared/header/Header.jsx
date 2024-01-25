import { Link } from "react-router-dom";
import './styles/header.css'
import Menu from "../../menu/Menu";
import { useState } from "react";

/*<li className='header__item'><Link className='header__link' to='/cart'><i className='bx bx-cart-alt' ></i></Link> </li> */

const Header = () => {

    const [menuOpenClose, setmenuOpenClose] = useState("close")

    const handleClickOpenMenu = () => {
        setmenuOpenClose()
    }
    
    return(
        <header className="header" >
            
            <div className="header_conten_logo">
                <Link to={'/'}><img src="/mini-logo.jpg" alt="logo" className='header_img_logo'/></Link>
                <div className='item_user'><i className='bx bx-user' ></i></div>
            </div>

            <nav className='header__nav'>

                <ul className='header__list'>

                    <div className="icon_notifications">
                        <li className='item_notification_on'><i className='header__item bx bxs-bell'></i></li>
                        <li className='item_notification_off'><i className='header__item  bx bxs-bell-ring'></i></li>
                    </div>
                    <li onClick={handleClickOpenMenu} className='header_menu' ><i className='header__item bx bx-menu'></i></li>

                </ul>

                <Menu 
                menuOpenClose = {menuOpenClose}
                setmenuOpenClose = {setmenuOpenClose}/>
                

            </nav>

        </header>
    )

}

export default Header;