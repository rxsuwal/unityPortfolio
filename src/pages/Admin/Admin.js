import React from 'react'

import styles from './Admin.module.scss'
import Info from '../../components/Admin/Info/Info'
import Services from '../../components/Admin/Services/Services'
import Portfolio from '../../components/Admin/Portfolio/Portfolio'
import Message from '../../components/Admin/Message/Message'



const Admin = () => {
    return (
        <div className={styles.admin}>
            <Info/>
            <Services/>
            <Portfolio/>
            <Message/>
        </div>
    )
}

export default Admin
