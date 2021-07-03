import React from 'react'
import { NavLink } from 'react-router-dom'

import * as styles from './Navbar.module.scss'

function Navbar(props) {
    return (
        <nav>
            <ul>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/authout'>Authout</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/information'>information</NavLink></li>
                <li> <NavLink activeClassName={styles.activeLink} to='/admin/services'>services</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/portfolio'>Portfolio</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/message'>Message</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/admin/social'>social</NavLink></li>
                
               
            </ul>
        </nav>
    )
}

export default Navbar
