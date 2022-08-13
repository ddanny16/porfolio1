import React from 'react'
import ".myContact.css";

const myContact = () => {
    return (
        <div>
            <h1>      You Can Contact Us At the following stuff below
            </h1>
            <div className="contact-info">
                <label htmlFor="text">Any Reviews?</label>
                <input type="text" name="text" id="text" />
            </div>
        </div>
    )
}

export default myContact
