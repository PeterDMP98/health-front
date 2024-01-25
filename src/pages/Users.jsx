import '../components/Users/styles/users.css'
import UserInformations from "../components/Users/userInformation";

const Users =()=>{

    return (
        <div className="Users">

            <h1>Usuarios</h1>            
            <div className='user_content_inf'>
            <button className="users_add"><i class='bx bx-add-to-queue' ></i> Crear Usuario</button>
                <UserInformations/>
            </div>
        </div>
    )
}

export default Users;