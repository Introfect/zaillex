import React, { useState } from 'react'
import Nav from './Nav'
import Login from './Login'
import Features from './Features'

type Props = {}

function Home({}: Props) {
  const [show,setShow]=useState(false);
  return (
    <div>
    <div>
        <Nav 
        setShow={setShow}/>
        <Login 
        show={show}
        setShow={setShow}
        />
    </div>
    <Features/>
    </div>

  )
}

export default Home