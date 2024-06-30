"use client"

import AuthForm from "../AuthForm";


export default function Login() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    console.log("Login", email, password)
  }

  return (
    <main>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}