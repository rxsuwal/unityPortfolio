import React from 'react'

import * as styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
        <div className={styles.cube1}></div>
        <div className={styles.cube2}></div>
    </div>
  )
}

export default Spinner
