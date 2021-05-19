import React from 'react'

import styles from './Testimonials.module.scss'

import Vl from '../../UI/Vl/Vl'
import Slider from 'react-slick'

let baseURL = '../../../assets/img/testimonials';


const Testimonials = () => {

    
    const setting ={
        customPaging: function(i) {
            return (
              <a>
                <img src={`${baseURL}/testimonial_${i + 1}.jpeg`} />
              </a>
            );
          },
          dots: true,
          dotsClass: "slick-dots slick-thumb",
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1

    }

    return (
        <div className={styles.testimonials}>
            <div className={styles.header}>
                <h1>We love our clients</h1>
                <p>Labore reprehenderit excepteur culpa do aute qui nulla voluptate do cillum reprehenderit dolor.</p>

            </div>
            <Vl/>

            <Slider {...setting} className={styles.slider}>
                <div className={styles.item}>
                    <p>In ipsum proident duis qui sunt duis quis elit laborum. Eiusmod duis anim veniam in. Minim deserunt nisi ullamco pariatur labore aute irure in cillum. Nisi incididunt velit consequat tempor deserunt adipisicing ad commodo velit do. Excepteur irure cupidatat deserunt in.</p>
                    <div>Rebecca Williams</div>
                    <span>CEO, SXY Inc.</span>
                    
                </div>

                <div className={styles.item}>
                    <p>In ipsum proident duis qui sunt duis quis elit laborum. Eiusmod duis anim veniam in. Minim deserunt nisi ullamco pariatur labore aute irure in cillum. Nisi incididunt velit consequat tempor deserunt adipisicing ad commodo velit do. Excepteur irure cupidatat deserunt in.</p>
                    <div>Rebecca Williams</div>
                    <span>CEO, SXY Inc.</span>
                    
                </div>

            </Slider>
            
        </div>
    )
}

export default Testimonials
