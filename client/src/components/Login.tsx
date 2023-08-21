import React from 'react'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { doLogin } from '../auth'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { error } from 'console'

interface Values {
  firstName: string;  
  lastName: string;
  email: string;
}

const Login = () => {
  const navigate = useNavigate()
  const [register, setRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [formState, setFormState] = useState(0)
  const [show,setShow]=useState(false)

  const loginUser = async (e: any) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
      userEmail: email,
      password: password,
    })
    toast.success('Login Successful')
    doLogin(response.data)
    navigate('/')
    console.log(response.data)
  }
  const registerUser = async (e: any) => {
    e.preventDefault()
    const response:any = await axios.post('http://localhost:5000/api/v1/auth/register', {
      name: name,
      userEmail: email,
      password: password,
      confirmPassword: password2
    }).then((response) => {

      doLogin(response.data)
      navigate('/')
      setShow(false)
      return (toast.success ("Registration Succesfull", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
      )
      )
    }).catch(errr => {
      if (errr instanceof AxiosError) {
        if (errr.response?.status === 409) {
          return (toast.error ("User already exist", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
          )
          )
        }else{
          return (toast.error (`${errr.response?.status} error occured`, {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
          )
          )
        }
      }else{
        return (toast.error ("Some error occured", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
        )
        )
      }
    }
    )
  }


  return (
    <div>
  
     {
      show?(
        <div className='fixed inset-0 bg-zinc-900/20 z-10'>
        <div className='constainer flex items-center h-full max-w-lg mx-auto'>
          <div className='relative bg-white w-full h-fit py-20 rounded-lg'>
            <div className='absolute top-4 right-4'>
              <div className='rounded-full w-6 z-30 cursor-pointer' onClick={()=>setShow(false)}>X</div>

            </div>
            <div className='flex flex-col rounded-md '>
              <span
                className='bg-green-600 max-w-fit px-2 mx-auto rounded hover:font-bold py-1  text-white z-4'
                onClick={() => setRegister(!register)}>
                {register ? 'Want to login insted?' : 'want to register'}
              </span>
              <form className='flex flex-col space-y-6 rounded-md min-h-min p-3 '>
                {register ? <input
                  onChange={(e) => setName(e.target.value)}
                  className='h-10 mx-5 p-1'
                  type='text' placeholder='Enter your Username' /> : null}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='h-10 mx-5 p-1'
                  type='text' placeholder='Enter your email' />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='h-10 mx-5 p-1'
                  type='text' placeholder='Enter your Password' />
                {register ? <input
                  onChange={(e) => setPassword2(e.target.value)}
                  className='h-10 mx-5 p-1'
                  type='text' placeholder='Confirm your Password' /> : null}
                <button
                  onClick={register ? registerUser : loginUser}

                  type='submit'>
                  {register ? 'Register' : 'Login'}
                </button>

              </form>

            </div>



          </div>
        </div>

      </div>
      ):null
     }
    <section className="pt-24 bg-white">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Start</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-600 to-purple-500 lg:inline">building a buzz</span> <span>around your product ?</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a href="#_" onClick={()=>setShow(true)} className="scroll-none inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-600 rounded-2xl sm:w-auto sm:mb-0">
                    Get Started
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </a>
            </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-green-600 rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"/>
                </div>
            </div>
        </div>
    </div>
</section>

{/* 
      <div classNameName=' bg-gray-200  h-screen  w-full flex  items-stretch lg:items-center'>
        <div className='h-full w-full flex items-center lg:h-2/4'>

          <div className=' w-full flex flex-col justify-center items-center lg:items-start h-full lg:max-w-lg space-y-10 ml-10'>
            <p className='text-6xl font-bold lg:max-w-md text-center lg:text-left'>
              Run your entire buisness in one place
            </p>
            <p className='max-w-lg text-center lg:max-w-sm text-lg font-thin lg:text-left'>The only business management tool that combines CRM, invoicing, accounting and banking.

            </p>
            <button type="button" onClick={()=>setShow(true)} className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 outline-none ">Get started</button>

          </div>
        </div>
        <div className='hidden lg:block'>
          <img
            src='https://assets-global.website-files.com/635ac9564cc3682ce1536786/6398ab6fe9bf5347ad04f377_branch_main.png'
            className=' max-w-md lg:max-w-xl'
          />
        </div>
    
      </div> */}
    </div>
  )
}


export default Login
