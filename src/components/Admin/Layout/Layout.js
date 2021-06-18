import React from 'react'
import Navbar from '../Navbar/Navbar'
import * as styles from './Layout.module.scss'

const Layout = (props) => {
    return (
        <div className={styles.layout}>
            <aside>
                <Navbar/>
            </aside>
            <main>
                {props.children}
            </main>

            
        </div>
    )
}

export default Layout
