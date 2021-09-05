import React from 'react'
import { useHistory } from 'react-router'

const Navbar = () => {
    const history = useHistory();
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
        <header>
            <div className="name" href="/">&lt;/&gt; Pasteez</div>
            <nav>
                <ul className="navlinks">
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Navbar
