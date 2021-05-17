import React from 'react'

import './Team.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



const Team = () => {

    const sliderSetting ={
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      },
      arrow:true,
      prevArrow: <button><ArrowUpwardIcon style={{fontSize:"3rem"}}/></button>,
      nextArrow:<button><ArrowDownwardIcon style={{fontSize:"3rem"}}/></button>,
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

    return (
        <div className="team">

            <Slider {...sliderSetting} className="slider">

                <div className="slide">
                    <h1>Designer & Coder Designer & Coder</h1>
                    <p>Esse Reprehenderit consequat elit quis quis qui excepteur aliqua est id do voluptate voluptate proident dolor. reprehenderit mollit deserunt aute voluptate aliquip elit ex incididunt veniam sunt incididunt.</p>
                </div>

               <div className="slide">
                    <h1>Designer & Coder</h1>
                    <p>Esse Reprehenderit consequat elit quis quis qui excepteur aliqua est id do voluptate voluptate proident dolor. reprehenderit mollit deserunt aute voluptate aliquip elit ex incididunt veniam sunt incididunt.</p>
                </div>

                <div className="slide">
                    <h1>Designer & Coder</h1>
                    <p>Esse Reprehenderit consequat elit quis quis qui excepteur aliqua est id do voluptate voluptate proident dolor. reprehenderit mollit deserunt aute voluptate aliquip elit ex incididunt veniam sunt incididunt.</p>
                </div> 

                <div className="slide">
                    <h1>Designer & Coder</h1>
                    <p>Esse Reprehenderit consequat elit quis quis qui excepteur aliqua est id do voluptate voluptate proident dolor. reprehenderit mollit deserunt aute voluptate aliquip elit ex incididunt veniam sunt incididunt.</p>
                </div>
                
            </Slider>
            
        </div>
    )
}

export default Team
