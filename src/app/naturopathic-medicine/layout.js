import React from 'react'
import { BiSolidHome } from "react-icons/bi";
import "./medi.css"
import Link from 'next/link'
const layout = ({children}) => {
  return (
    <>
    <div className='homebtn'>
        <Link href='/'>
<BiSolidHome className='text-white homicon' />

        </Link>
       <span>Home</span> 
    </div>
      {children}
    </>
  )
}

export default layout
