import React from 'react'

async function getTicketDetial(id) {

    const getTicketDetail = await fetch(`http://localhost:4000/tickets/` + id, {
        next: {
            revalidate: 60
        }
    })

     return getTicketDetail.json()
}

export default async function TicketDetail({params}) {
    
    const tickets = await getTicketDetial(params.id)
    
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{tickets.title}</h3>
                <small>Created by {tickets.user_email}</small>
                <p>{tickets.body}</p>
                <div className={`pill ${tickets.priority}`}>
                    {tickets.priority} priority
                </div>
            </div>
        </main>
  )
}
