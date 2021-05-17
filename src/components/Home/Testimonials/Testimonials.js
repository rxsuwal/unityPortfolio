import React from 'react'

import styles from './Testimonials.module.scss'

import Vl from '../../UI/Vl/Vl'
import Slider from 'react-slick'

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <div className={styles.header}>
                <h1>We love our clients</h1>
                <p>Labore reprehenderit excepteur culpa do aute qui nulla voluptate do cillum reprehenderit dolor.</p>

            </div>
            <Vl/>

            <Slider className={styles.slider}>
                <div>vfjvm</div>

                <div>vfjvm</div>
                <div>vfjvm</div>

            </Slider>
            
        </div>
    )
}

export default Testimonials
