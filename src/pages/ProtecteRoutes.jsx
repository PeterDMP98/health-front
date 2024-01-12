import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet} from 'react-router-dom'

const ProtecteRoutes = () => {
    
    const {verifyUser} = useSelector(state => state)

    if (verifyUser.length >= 3) {
        return <Outlet/>
    } else {
        return <Navigate to='/login'/>        
    }
}

export default ProtecteRoutes