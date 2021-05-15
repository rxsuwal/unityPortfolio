import React from 'react'
import styles from './Services.module.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import imgSlide from '../../../assets/img/mac.png'

const Services = () => {

   

    const txtSliderSettings ={
        arrows: false,
        // asNavFor:'imgSlide',
        dots: true,
        customPaging: function(i) {
            i++
            return (
               
              <a>
                {'0' + i}
              </a>
            );
          },
       
   
    }

    const imgSliderSettings = {
        arrows:true,
        dots:false,
        // asNavFor:'txtSlide',
    }
    return (
        <div className={styles.services}>
            <div className={styles.txt}>
                <h3>services</h3>

                <Slider {...txtSliderSettings}>
                    <div className={styles.txtSlide}>
                        <h1>We brings a wonderful artistic sense to project</h1>
                        <p>Nostrud consectetur commodo nostrud deserunt sint ad qui fugiat et commodo aliquip aute do elit. Irure dolor quis non veniam eiusmod veniam ex ea do. Magna in duis non deserunt aliqua et elit consectetur laboris.</p>
                    </div>

                    <div className={styles.txtSlide}>
                        <h1>We brings a wonderful artistic sense to project</h1>
                        <p>Nostrud consectetur commodo nostrud deserunt sint ad qui fugiat et commodo aliquip aute do elit. Irure dolor quis non veniam eiusmod veniam ex ea do. Magna in duis non deserunt aliqua et elit consectetur laboris.</p>
                    </div>
                    <div className={styles.txtSlide}>
                        <h1>We brings a wonderful artistic sense to project</h1>
                        <p>Nostrud consectetur commodo nostrud deserunt sint ad qui fugiat et commodo aliquip aute do elit. Irure dolor quis non veniam eiusmod veniam ex ea do. Magna in duis non deserunt aliqua et elit consectetur laboris.</p>
                    </div>

         

                </Slider>

            </div>

            <div className={styles.img}>

                <Slider {...imgSliderSettings} className={styles.imgSlider}>
                    <div className={styles.imgSlide}>

                        <img src={imgSlide} alt=""/>
                        

                    </div>

                    <div className={styles.imgSlide}>

                        <img src={imgSlide} alt=""/>
                        

                    </div>
                    <div className={styles.imgSlide}>

                        <img src={imgSlide} alt=""/>
                        

                    </div>
                    <div className={styles.imgSlide}>

                        <img src={imgSlide} alt=""/>
                        

                    </div>

                </Slider>

            </div>
            
        </div>
    )
}

export default Services
