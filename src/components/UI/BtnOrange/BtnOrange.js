import React from 'react'
import styles from './BtnOrange.module.scss'

const BtnOrange = (props) => {
    return (
        <button className={styles.btnOrange}>
            {props.children}
        </button>
    )
}

export default BtnOrange
