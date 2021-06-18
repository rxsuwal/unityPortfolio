import React from 'react'

import * as styles from './Button.module.scss'

const Button = (props) => {
    return (
        <button className={styles.button} onClick ={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button
