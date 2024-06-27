import React from 'react'

async function getTicket(){
    const res = await fetch('http://localhost:4000/tickets')
    return res.json()
}

export default async function TicketList() {
    const ticket = await getTicket()
  return (
    <>
    
    {ticket.map((tickets) => (
        <div key={tickets.id} className='card'>
            <h3>{tickets.title}</h3>
            <p>{tickets.body}</p>
            <div className={`pill ${tickets.priority}`}>
              {tickets.priority} priority
            </div>
        </div>
    ))}
    {ticket.length === 0 && (
      <p className='text-center'>There are no open tickets</p>
    )}
    
    </>
  )
}
