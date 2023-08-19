import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { doLogin } from '../auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const Login = () => {
  const navigate =useNavigate()
  const [register, setRegister] = useState(false)
const [name , setName] = useState('')
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')
const [password2 , setPassword2] = useState('')
const [formState,setFormState]=useState(0)

  const loginUser = async(e:any) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/api/v1/auth/login',{
      userEmail:email,
      password:password,     
  })
  toast.success('Login Successful')
  doLogin(response.data)
  navigate('/')
  console.log(response.data)
  }
  const registerUser= async(e:any)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/api/v1/auth/register',{
      name:name,
      userEmail:email,
      password:password,
      confirmPassword:password2
  })
  doLogin(response.data)
  navigate('/')
  console.log(response.data)
 
}
const handleForm=(e:any)=>{
e.preventDefault();
if(email){
  toast('enter Email')
  setFormState(1)
}
}
  return (
    <div className=' bg-gray-200  h-screen  w-full flex items-center'>
      <div className='h-full w-full flex items-center lg:h-2/4'>

      <div className=' w-full flex flex-col justify-center items-center h-full lg:max-w-lg space-y-10 ml-10'>
        <p className='text-6xl font-bold max-w-md'>
          Run your entire buisness in one place
        </p>
        <p className='max-w-sm text-lg font-thin'>The only business management tool that combines CRM, invoicing, accounting and banking.

</p>
<button className='max-w-max'>Get Started</button>

      </div>
      </div>
      <div className='hidden lg:block'>
        <img
        src='https://assets-global.website-files.com/635ac9564cc3682ce1536786/6398ab6fe9bf5347ad04f377_branch_main.png'
        className='max-w-xl'
        />
      </div>
      {/* <div className='flex space-x-20 item-center justify-center'>
    <div className=' text-white py-auto'>
        <div className='flex flex-col text-spotify_green text-7xl'>
            <div>Work</div>
            <h1>Bit</h1>
        </div>
        <div>
            <p>WorkBit is a platform for freelancers, employers,students to connect and schedule together.</p>
            <p>Plan. Schedule. Execute</p>
        </div>
    </div>

    <div className='flex flex-col bg-spotify_green rounded-md '>
      <button 
      className='bg-spotify_green  m-3  text-white z-4'
      onClick={() => setRegister(!register)}>
        {register ? 'Register' : 'Login'}
      </button>
      <form className='flex flex-col space-y-6 rounded-md min-h-min p-3 '>
      {register?<input 
        onChange={(e)=>setName(e.target.value)}
        className='h-10 mx-5 p-1'
        type='text' placeholder='Enter your Username'/>:null}
        <input
        onChange={(e)=>setEmail(e.target.value)}
        className='h-10 mx-5 p-1'
        type='text' placeholder='Enter your email'/>
        <input 
        onChange={(e)=>setPassword(e.target.value)}
        className='h-10 mx-5 p-1'
        type='text' placeholder='Enter your Password'/>
        {register?<input 
        onChange={(e)=>setPassword2(e.target.value)}
        className='h-10 mx-5 p-1'
        type='text' placeholder='Confirm your Password'/>:null}
        <button 
        onClick={register ? registerUser : loginUser}
      
        type='submit'>
          {register ? 'Register' : 'Login'}
          </button>
        
      </form>

    </div>
    </div> */}
        </div>
  )
}


export default Login