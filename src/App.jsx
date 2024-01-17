import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProtecteRoutes from './pages/ProtecteRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Users from './pages/Users'
import Header from './components/shared/header/Header'
import Purchases from './pages/Purchases'
import AllProducts from './pages/AllProducts'
import AllTotalMoney from './pages/AllTotalMoney'

function App() {
  const [go, setGo] = useState(false)

  return (
    <div className='App'>

      {
        go ? <Header/> : <div></div>
      }

      <Routes>
        <Route element={<ProtecteRoutes setGo={setGo}/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<Users/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/all-products' element={<AllProducts/>}/>
          <Route path='/all-total-Money' element={<AllTotalMoney/>}/>
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
  )
}

export default App
