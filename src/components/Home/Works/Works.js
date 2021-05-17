import React from 'react'

import styles from './Works.module.scss'

import portfolio_1 from '../../../assets/img/portfolio_1.jpg'
import portfolio_2 from '../../../assets/img/portfolio_2.jpg'
import portfolio_3 from '../../../assets/img/portfolio_3.jpg'
import portfolio_4 from '../../../assets/img/portfolio_4.jpg'
import portfolio_5 from '../../../assets/img/portfolio_5.jpg'
import portfolio_6 from '../../../assets/img/portfolio_6.jpg'

const Works = () => {

  



    return (
        <div className={styles.works}>
            <div>
                <h1>What we have done</h1>
                <p>Id consectetur cillum proident aliquip occaecat ullamco cillum in.Aliquip laboris mollit est aute.</p>
            </div>

            <ul class={styles.filter}>
                <li><button data-name="*" className="active" >All</button></li>
                <li> <button data-name=".webdesign" class=" ">Web Design </button></li>
                <li> <button data-name=".mobile" class=" ">Mobile</button></li>
                <li> <button data-name=".photography" class="">Photography</button></li>
            </ul>
            
            <div className={styles.grid}>
                <div class={styles.gridItem} >
                    <a href="#!"><img src={portfolio_1} alt=""/>
                        <div class={styles.gridHover}>
                            <span>Green Jasmine </span>
                            <p>Web Design / Dvelopment</p>
                        </div>
                    </a>
                </div>

                <div class={styles.gridItem} >
                    <a href="#!"><img src={portfolio_2} alt=""/>
                        <div class={styles.gridHover}>
                            <span>Green Jasmine </span>
                            <p>Web Design / Dvelopment</p>
                        </div>
                    </a>
                </div>
                <div class={styles.gridItem} >
                    <a href="#!"><img src={portfolio_3} alt=""/>
                        <div class={styles.gridHover}>
                            <span>Green Jasmine </span>
                            <p>Web Design / Dvelopment</p>
                        </div>
                    </a>
                </div>
                <div class={styles.gridItem} >
                    <a href="#!"><img src={portfolio_4} alt=""/>
                        <div class={styles.gridHover}>
                            <span>Green Jasmine </span>
                            <p>Web Design / Dvelopment</p>
                        </div>
                    </a>
                </div>
                <div class={styles.gridItem} >
                    <a href="#!"><img src={portfolio_5} alt=""/>
                        <div class={styles.gridHover}>
                            <span>Green Jasmine </span>
                            <p>Web Design / Dvelopment</p>
                        </div>
                    </a>
                </div>
                <div class={styles.gridItem} >
                    <a href="#!"><img src={portfolio_6} alt=""/>
                        <div class={styles.gridHover}>
                            <span>Green Jasmine </span>
                            <p>Web Design / Dvelopment</p>
                        </div>
                    </a>
                </div>

            </div>
            
        
            
        </div>
    )
}

export default Works
