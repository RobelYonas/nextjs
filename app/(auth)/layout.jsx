import Link from 'next/link'
import React from 'react'

export default function AuthLayout({children}) {
  return (
    <>
    <nav>
        <h1>Nextjs</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/Login">Login</Link>
    </nav>
    {children}
    </>
  )
}
