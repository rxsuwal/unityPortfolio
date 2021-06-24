import React from 'react'

import * as styles from './styles.module.scss'

const AddBtn = (props) => {
    return (
        <button onClick={props.clicked} className={styles.button}>
            {props.children}
        </button>
    )
}

export default AddBtn
