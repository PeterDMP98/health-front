import './styles/userInformations.css'

const UserInformations = () => {

    return(
        <div className="user_informations"> 
            <i class='bx bxs-user-circle'></i>
            <h3 className="user_name">Pedro Luis Caraballo Banquez</h3>
            <button className="user_btn user_put"><i class='bx bx-refresh'></i> Aptualizar</button>
            <button className="user_btn user_delete"><i class='bx bx-trash'></i> Eliminar</button>
            <button className="user_btn user_cierres"> <i className='bx bx-cart-alt'></i> Cierre de caja</button>
            <form>
                <label htmlFor="">Activo: </label>
                <input type="checkbox" />
            </form>
            
        </div>
    )
}

export default UserInformations;