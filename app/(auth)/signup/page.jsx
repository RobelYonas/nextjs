"use client"

import AuthForm from "../AuthForm";


export default function signUp() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    console.log("Signup", email, password)
  }

  return (
    <main>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}