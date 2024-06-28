import Link from 'next/link'
import React from 'react'

export default function ErrorPage() {
  return (
    <main className="text-center">
        <h2 className="text-3x1">
            There was a problem.
        </h2>
        <p>we could not find page</p>
        <p>Go back to <Link href="/">home</Link></p>
    </main>
  )
}
