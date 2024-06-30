"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        setIsLoading(true); // Sets a loading state to true, which could be used to show a loading spinner or disable the submit button

        // Create a new ticket object with form data
        const newTicket = { title, body, priority, user_email: 'mario@netninja.dev' };

        // Make a POST request to the server with the new ticket data
        const res = await fetch('http://localhost:4000/tickets', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTicket)
        });

        // Check if the response status is 201 (Created)
        if (res.status === 201) {
            // Refresh the router to get the latest data
            router.refresh();
            // Redirect the user to the /tickets page
            router.push('/tickets');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Title:</span>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}