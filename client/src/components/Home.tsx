import React from 'react'
import Nav from './Nav'
import Login from './Login'

type Props = {}

function Home({}: Props) {
  return (
    <div className='h-screen'>
        <Nav/>
        <Login/>
    </div>
  )
}

export default Home