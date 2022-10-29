import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h1>UTA HEALTH CARE</h1>
            <form action="/dashboard">
                <p>
                    <label><h3>Username</h3></label><br/>
                    <input type="text" placeholder="Netid or email" name="first_name" required />
                </p>
                <p>
                    <label><h3>Password</h3></label> 
                    
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <Link to="/forget-password"><label className="right-label"><h6>Forget password?</h6></label></Link>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p><h5>First time?</h5> <Link to="/register"><h5>Create an account</h5></Link>.</p>
                <p><Link to="/"><h5>Back to Homepage</h5></Link>.</p>
            </footer>
        </div>
    )
}
