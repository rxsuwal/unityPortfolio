import React from 'react'

import * as styles from './style.module.scss'

const DeleteButton = (props) => {
    return (
        <button className={styles.button} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default DeleteButton
