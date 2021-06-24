import React, { Component } from 'react'
import './About.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import imgSlide from '../../../assets/img/mac.png'


class About extends  Component {

    constructor(props){
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount(){
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }
   

    
 
   render(){

    const txtSliderSettings ={
        arrows: false,
        dots: true,
        customPaging: function(i) {
            i++
            return (
               
              <a>
                {i}
              </a>
            );
          },
       
   
    }

    const imgSliderSettings = {
        dots:false,
        arrows:true,
        nextArrow:<button><i class="fi-xtlrxl-arrow-simple-thin"></i></button>,
        prevArrow:<button><i class="fi-xtllxl-arrow-simple-thin"></i></button>,

        
    }


    return (
        <div className='about' id='about'>
            <div className='aboutTxt'>
                <h3>about</h3>

                <Slider {...txtSliderSettings} 
                        className='txtSlider'
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}>

                    <div className="txtSlide">
                        <h1>We brings a wonderful artistic sense to project</h1>
                        <p>Nostrud consectetur commodo nostrud deserunt sint ad qui fugiat et commodo aliquip aute do elit. Irure dolor quis non veniam eiusmod veniam ex ea do. Magna in duis non deserunt aliqua et elit consectetur laboris.</p>
                    </div>

                    <div className="txtSlide">
                        <h1>We brings a wonderful artistic sense to project</h1>
                        <p>Nostrud consectetur commodo nostrud deserunt sint ad qui fugiat et commodo aliquip aute do elit. Irure dolor quis non veniam eiusmod veniam ex ea do. Magna in duis non deserunt aliqua et elit consectetur laboris.</p>
                    </div>


                </Slider>

            </div>

            <div className='aboutImg'>

                <Slider {...imgSliderSettings} 
                        className="imgSlider"    
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}>
                    <div className="imgSlide">

                        <img src={imgSlide} alt=""/>
                        

                    </div>

                    <div className="imgSlide">

<img src={imgSlide} alt=""/>


</div>
                </Slider>

            </div>
            
        </div>
    )
   }
}

export default About
