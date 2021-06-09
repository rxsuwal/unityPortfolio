import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <Link to='/admin/message'>Message</Link>
                <Link to='/admin/portfolio'>Portfolio</Link>
                <Link to='/admin/services'>services</Link>
                <Link to='/admin'>information</Link>
            </ul>
        </nav>
    )
}

export default Navbar
