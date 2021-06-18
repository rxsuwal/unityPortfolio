import React from 'react'
import { NavLink } from 'react-router-dom'

import * as styles from './Navbar.module.scss'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/information'>information</NavLink></li>
                <li> <NavLink activeClassName={styles.activeLink} to='/admin/services'>services</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/portfolio'>Portfolio</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/message'>Message</NavLink></li>
                
               
            </ul>
        </nav>
    )
}

export default Navbar
