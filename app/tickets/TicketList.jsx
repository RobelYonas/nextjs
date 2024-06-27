import React from 'react'
import Link from 'next/link'

async function getTicket(){
    /**
     * Fetches tickets from the server and returns them as JSON.
     *
     * @return {Promise<Array>} An array of ticket objects.
     */
    // Fetch tickets from the server
    const res = await fetch('http://localhost:4000/tickets', {
        // Set the revalidation time to 0 to always fetch the latest data
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

export default async function TicketList() {
    const ticket = await getTicket()
  return (
    <>
    
    {ticket.map((tickets) => (
        <div key={tickets.id} className='card'>
          <Link href={`/tickets/${tickets.id}`}>
              <h3>{tickets.title}</h3>
              <p>{tickets.body}</p>
              <div className={`pill ${tickets.priority}`}>
                {tickets.priority} priority
              </div>
        </Link>
        </div>
    ))}
    {ticket.length === 0 && (
      <p className='text-center'>There are no open tickets</p>
    )}
    
    </>
  )
}
