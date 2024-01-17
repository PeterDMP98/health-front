import { Link } from 'react-router-dom'
import './styles/menu.css'

const Menu = ({menuOpenClose,setmenuOpenClose}) =>{

    const handleClickMenuClose = () => {
        setmenuOpenClose("close")
    }

    return (
        <div className={`Menu ${menuOpenClose}`}>
            <i onClick={handleClickMenuClose} className='bx bx-x'></i>
            
            <div className='menu_content_list'>
                
                <h2 className="menu_title">Menu</h2>
                
                <ul className="menu_list">
                    
                    <Link to={'/user'} className="menu_item">Usuarios</Link>
                    <Link to={'/purchases'} className="menu_item">Historial de Ventas</Link>
                    <Link to={'/all-products'} className="menu_item">Todos los Productos</Link>
                    <li className="menu_item">Cierre de usuario</li>
                    <Link to={'/all-total-money'} className="menu_item">Todos los Cierres</Link>
                
                </ul>
            
            </div>
            
        </div>
    )
}

export default Menu