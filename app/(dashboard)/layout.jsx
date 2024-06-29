import React from 'react'
import Navbar from '../components/Navbar'


export default function Dashboard({children}) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
