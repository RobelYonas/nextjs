"use client"

import { useState } from 'react'

/**
 * Renders an authentication form with email and password inputs and a submit button.
 * Calls the handleSubmit function when the form is submitted with the email and password values.
 * @param {function} handleSubmit - The function to be called when the form is submitted.
 * @returns {JSX.Element} - The rendered authentication form.
 */
export default function AuthForm({ handleSubmit }) {
    // State variables for email and password inputs
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form onSubmit={(e) => handleSubmit(e, email, password)}>
            {/* Email input */}
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            {/* Password input */}
            <label>
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            {/* Submit button */}
            <button className="btn-primary">Submit</button>
        </form>
    )
}
