import React, { useState } from "react";


export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setFormState({ name: '', email: '', message: '' })
        setErrorMessage("My site is not ready to save this form's data. Please contact me via my GitHub or LinkedIn (found at the bottom of this page) for now!")
    }

    function validateEmail(email) {
    // regex expression from RUT-VIRT-FSF-PT-12-2022-U-LOLC/01-Class-Content/20-React/01-Activities/16-Stu_React-Forms/Solved/src/utils/helpers.js
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
        }

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    // append a message to the DOM if the user leaves a field blank or has an invalid email onBlur
    function handleBlur(e) {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`);
        } else if (e.target.name === 'email') {
            if (!validateEmail(e.target.value)) {
                setErrorMessage('your email is invalid')
            } else {
                setErrorMessage('');
            }
        } else {
            setErrorMessage('');
    }
}



    return (
        <section>
        <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit} >
            <div>
            <label htmlFor="name">Name:</label>
            <input value={name} type="text" name="name" onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input value={email} type="email" name="email" onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <input value={message} type="text" name="message" onChange={handleChange} onBlur={handleBlur} />
            </div>
            <button type="submit">Submit</button>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}


        </form>
        </section>
    );
}