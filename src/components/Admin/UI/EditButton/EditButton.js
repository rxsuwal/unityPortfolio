import React from 'react'
import * as styles from './EditButton.module.scss'

const EditButton = (props) => {
    return (
        <button className={styles.button} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default EditButton
