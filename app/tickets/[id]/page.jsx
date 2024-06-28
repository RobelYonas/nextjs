import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket)=> {{
        id: ticket.id
    }})
}

async function getTicketDetial(id) {

    await new Promise(resolve => setTimeout(resolve, 3000))

    const getTicketDetail = await fetch(`http://localhost:4000/tickets/` + id, {
        next: {
            revalidate: 60
        }
    })
    
    if (!getTicketDetail.ok){
        notFound()
    }

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
