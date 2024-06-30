import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(_, { params: { id } }) {
    const url = `http://localhost:4000/tickets/${id}`;
    const response = await fetch(url);
    const ticket = await response.json();

    if (!response.ok) {
        return NextResponse.json({ error: 'Ticket not found' }, { 
            status: 404 });
    }

    return NextResponse.json(ticket, { 
        status: 200 });
}
