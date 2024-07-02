import { NextResponse } from "next/server"

/**
 * Force this API route to be dynamic, meaning it will be re-generated on each request.
 */
export const dynamic = 'force-dynamic'

/**
 * Handles GET requests to retrieve all tickets from the server.
 * @returns {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the tickets.
 */
export async function GET(){
    // Fetch all tickets from the server
    const res = await fetch('http://localhost:4000/tickets')

    // Parse the response as JSON
    const tickets = await res.json()

    // Return a NextResponse object with the tickets and a status code of 200
    return NextResponse.json(tickets, {
        status: 200
    })
}

/**
 * Handles POST requests to create a new ticket on the server.
 * @returns {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the newly created ticket.
 */
export async function POST() {
    // Parse the request body as JSON
    const ticket = await request.json()

    // Send a POST request to the server with the ticket data
    const res = await fetch('http://localhost:4000/tickets', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(ticket)
    })

    // Parse the response as JSON
    const newTicket = await res.json()

    // Return a NextResponse object with the newly created ticket and a status code of 201
    return NextResponse.json(newTicket, {
        status: 201
    })
}
