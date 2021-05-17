import React from 'react'

import styles from './ServicesCard.module.scss'

const ServicesCard = (props) => {
    return (
        <div className={styles.servicesCard}>
            <div class={styles.icon}><img src={props.img} alt=""/></div>
            <h1 class={styles.title}>{props.title}</h1>
            <p class={styles.description}>{props.description}</p>
        </div>
    )
}

export default ServicesCard
