import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h2>Create your personal account</h2>
            <form action="/home">
                <p>
                    <label><h3>Username</h3></label><br/>
                    <input type="text" placeholder='Netid or email-id' name="first_name" required />
                </p>
                <p>
                    <label><h3>Email address</h3></label><br/>
                    <input type="email" placeholder='@mavs.uta.edu' name="email" required />
                </p>
                <p>
                    <label><h3>Password</h3></label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit"><h4>Register</h4></button>
                </p>
            </form>
            <footer>
                <p><Link to="/"><h4>Back to Homepage</h4></Link>.</p>
            </footer>
        </div>
    )

}
