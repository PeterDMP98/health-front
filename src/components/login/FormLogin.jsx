import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { setPassword, setUser } from '../../store/slices/verifyUser.slice'
import './styles/formLogin.css'


const FormLogin = () => {

    const navigate = useNavigate()

    const dispatch =  useDispatch()
  
    const inputName =  useRef()
    const inputPassword =  useRef()
  
    const hanldeSubmit = e => {
      e.preventDefault()
      dispatch(setUser(inputName.current.value.trim()))
      dispatch(setPassword(inputPassword.current.value))
      navigate('/')
    }

    return (
        <div className='FormLogin'>
            <h1 className='Login_title'>Login</h1>
            <form className='Login__form' onSubmit={hanldeSubmit}>
                <input className='Login__input' ref={inputName} type="text" placeholder='User' />
                <input className='Login__input' ref={inputPassword} type="password" placeholder='Password' />
                <button className='Login__btn'>Login</button>
            </form>
        </div>
    )
}

export default FormLogin