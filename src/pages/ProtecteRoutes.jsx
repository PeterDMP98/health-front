import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet} from 'react-router-dom'

const ProtecteRoutes = ({setGo}) => {
    
    const {verifyUser} = useSelector(state => state)

    if (verifyUser.length >= 3) {
        setGo(true)
        return <Outlet/>
    } else {
        setGo(false)
        return <Navigate to='/login'/>     
    }
}

export default ProtecteRoutes