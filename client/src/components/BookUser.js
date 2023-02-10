import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const BookUser = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { user } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, fullName, message)
        setFullName("");
        setMessage("");
    }

    return (
        <div className='bookContainer'>
            <div className='bookTitle'>Book a session with {user}</div>
            <form onSubmit={handleSubmit} className="booking__form">
                <label htmlFor='fullName'>Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <label htmlFor='email'>Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor='message'>Any important note? (optional)</label>
                <input
                    rows={5}
                    id="message"
                    name="message"
                    type="email"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <label htmlFor='session'>
                    Select your preferred session - 
                </label>

                <button className='bookingBtn'>SEND</button>
            </form>
        </div>
    )
}


export default BookUser