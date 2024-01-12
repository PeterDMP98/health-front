import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProtecteRoutes from './pages/ProtecteRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
      <Routes>
        <Route element={<ProtecteRoutes/>}>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
  )
}

export default App
