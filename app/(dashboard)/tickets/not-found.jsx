import React from 'react'
import Link from 'next/link'


export default function ErrorPage() {
  return (
    <main className="text-center">
        <h2 className="text-3x1">
            There was a problem.
        </h2>
        <p>We could not find ticketse</p>
        <p>Go back to <Link href="/tickets">tickets</Link></p>
    </main>
  )
}
