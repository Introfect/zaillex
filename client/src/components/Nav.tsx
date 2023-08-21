import React from 'react'
import { Codesandbox } from 'lucide-react';

type Props = {}

function Nav({}: Props) {
  const user=localStorage.getItem('user')
  return (
    
<nav className="fixed top-0 inset-x-0 h-fit  border-b z-[10] py-1">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <a href="/" className="flex items-center">
      <Codesandbox className='text-green-600 w-12'/>
      <span className="self-center text-xl font-semibold whitespace-nowrap ">CodeSB</span>
  </a>
  <div className="flex md:order-2">
    {

    user?(

<span className="self-center text-md font-medium whitespace-nowrap ">Welcome back {user}</span>
    ):(
      <button type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Get started</button>
    )
    }
      
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
      <a href="#" className="block py-2 pl-3 pr-4  text-black font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-black font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ">Pricing</a>
      </li>
      <li>
      <a href="#" className="block py-2 pl-3 pr-4 text-black font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ">Services</a>
      </li>
      <li>
      <a href="#" className="block py-2 pl-3 pr-4 text-black font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ">About</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Nav