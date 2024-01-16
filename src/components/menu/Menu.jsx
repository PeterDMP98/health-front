import './styles/menu.css'

const Menu = ({menuOpenClose,setmenuOpenClose}) =>{

    const handleClickMenuClose = () => {
        setmenuOpenClose("close")
    }

    return (
        <div className={`Menu ${menuOpenClose}`}>
            <i onClick={handleClickMenuClose} class='bx bx-x'></i>
            
            <div className='menu_content_list'>
                
                <h2 className="menu_title">Menu</h2>
                
                <ul className="menu_list">
                    
                    <li className="menu_item">Usuarios</li>
                    <li className="menu_item">Historial de Ventas</li>
                    <li className="menu_item">Todos los Productos</li>
                    <li className="menu_item">Cierre de usuario</li>
                    <li className="menu_item">Todos los Cierres</li>
                
                </ul>
            
            </div>
            
        </div>
    )
}

export default Menu