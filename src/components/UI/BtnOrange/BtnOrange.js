import React from 'react'
import styles from './BtnOrange.module.scss'

const BtnOrange = (props) => {
    return (
        <a href={props.href} className={styles.btnOrange}>
            {props.children}
        </a>
    )
}

export default BtnOrange
