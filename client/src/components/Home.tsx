import React from 'react'
import Nav from './Nav'
import Login from './Login'
import Features from './Features'

type Props = {}

function Home({}: Props) {
  return (
    <div>
    <div>
        <Nav/>
        <Login/>
    </div>
    <Features/>
    </div>

  )
}

export default Home