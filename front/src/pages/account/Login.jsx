import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [ loginData, setLoginData ] = useState({
    email: '',
    password: ''
  })
  const [ message, setMessage ] = useState('')

  const navigate = useNavigate()

  const { email, password } = loginData

  useEffect(() => {
    if(sessionStorage.authToken) {
      navigate('/')
    }
  },[])

  const ChangeHandler = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value    
    }))
  }
  
  const lableStyles = 'text-xs text-gray-600'
  const inputStyles = 'px-4 py-1 text-xs rounded-md w-full'

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(loginData)

    if(email === '' || password === '') {
      return setMessage('Please fill out all forms.')
    }

    if(password.length < 6) {
      return setMessage('Please check your password again.')
    }

    const requestToAPI = async () => {
      try {
        const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, loginData)
        if(request.data.success) {
          sessionStorage.setItem('authToken', request.data.token)
          sessionStorage.setItem('userId', request.data.userId)
          sessionStorage.setItem('role', request.data.role)
          window.location.reload(false)
        }
      } catch (error) {
        console.log(error)
        setMessage(error.response.data.message)
      }
    }

    requestToAPI()
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[700px]'>
      <div className='min-w-lg border-2 border-[#104C97] bg-[#104C97]/10 flex flex-col items-center p-8 shadow-lg rounded-lg'>
        <div className='pb-4 flex flex-col items-center gap-4 border-b border-[#104C97] w-full'>
          <p className='font-Arvo tracking-wide'>Account Login</p>
        </div>
        {message !== '' && <p className='text-xs text-red-600 pt-4'>{message}</p>}
        <form onSubmit={submitHandler} className='p-8 flex flex-col gap-4'>
          <div>
            <p className={lableStyles}>Email*</p>
            <input type='email' name='email' value={email} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <div>
            <p className={lableStyles}>Password*</p>
            <input type='password' name='password' value={password} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <button type='submit' className='bg-[#CF4802] px-4 py-2 rounded-md text-white text-sm hover:bg-[#CF4802]/60'>Login</button>
        </form>
        <div className='text-xs flex flex-row gap-2'>
          <p>
            Don't have an account?
          </p>
          <a href='/account/register' className='hover:text-blue-800'>Click Here</a>
        </div>
      </div>
    </div>
  );
}
export default Login;