import React from "react";
import { useState } from 'react';

const ContactPage = ()=>{
    
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    return(
        <>
            <div className="contactContainer">
            <h1>Contact Us</h1>
            <h3>Leave us a message below and we will get back to you as soon as we can.</h3>
            
            <form className="form" onSubmit={handleSubmit}>
                <div className="names">
                    <div>
                        <label>First Name:</label>
                        <input type="text" id="fName" placeholder="John..."/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" id="lName" placeholder="Smith..."/>
                    </div>
                </div>
                <div className="email">
                    <div>
                        <label>Email:</label>
                        <input type="text" id="email" placeholder="John.Smith@gmail.com"/>
                    </div>
                    <div>
                        <label>Subject:</label>
                        <select id="formSelect" >
                            <option>Bike Sales</option>
                            <option>Repairs</option>
                            <option>Parts</option>
                            <option>Accessories</option>
                            <option>General Inquiry</option>
                            <option>Other</option>
                        </select>
                </div>        
                </div>
                <div className="message">
                    <label>Message:</label>
                    <textarea id="message" placeholder="Type Message Here..." ></textarea>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>

            {submitted && <div className="submission-message">Submitted, Thank You!</div>}
            </div>
        </>
    )
}

export default ContactPage;