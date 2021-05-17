import React from 'react'
import ServicesCard from '../../UI/ServicesCard/ServicesCard'

import Vl from '../../UI/Vl/Vl'

import styles from './Services.module.scss'

import icon_1 from '../../../assets/img/feature_icon_1.png'
import icon_2 from '../../../assets/img/feature_icon_2.png'
import icon_3 from '../../../assets/img/feature_icon_3.png'
import icon_4 from '../../../assets/img/feature_icon_4.png'
import icon_5 from '../../../assets/img/feature_icon_5.png'
import icon_6 from '../../../assets/img/feature_icon_6.png'

const Services = () => {
    return (
        <div className={styles.services}>

            <div className={styles.header}>
                <h1>Your money is yours, we don't  take a cut.</h1>
                <p>Veniam qui excepteur dolore laboris anim reprehenderit ut culpa consectetur nulla irure minim. Pariatur mollit proident magna cupidatat et do cillum nostrud. Veniam tempor ullamco amet do sit non ipsum occaecat est pariatur dolore Lorem. Elit minim elit irure labore adipisicing voluptate ipsum commodo.</p>

            </div>
            <Vl/>

            
            <div className={styles.servicesList}>
                <ServicesCard img={icon_1} title='Design' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus!'/>
                <ServicesCard img={icon_2} title='Design' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus!'/>
                <ServicesCard img={icon_3} title='Design' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus!'/>
                <ServicesCard img={icon_4} title='Design' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus!'/>
                <ServicesCard img={icon_5} title='Design' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus!'/>
                <ServicesCard img={icon_6} title='Design' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus!'/>


            </div>
        </div>
    )
}

export default Services
