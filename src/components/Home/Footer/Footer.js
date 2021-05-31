import React from 'react'

import clientsLogo from '../../../assets/img/clients-logo.jpg'

import styles from './Footer.module.scss'

import Btn from '../../UI/BtnOrange/BtnOrange'
import axios from '../../../axios-data-push'
import { Component } from 'react'
import SendMsg from '../SendMsg/SendMsg'



class Footer extends Component {

    state ={
        info:[]
    }

    componentDidMount(){
        axios.get('/Info/-MarYOCT5WmhRr8gDKzu/info.json')
              .then(respnse=>{
                console.log(respnse.data)
                this.setState({info:respnse.data})
              }
              )
              .catch(error=>console.log(error))
      }


   render(){
    return (
        <footer className={styles.footer}>

            <figure>
                <img src={clientsLogo} alt=''/>

            </figure>

            <div className={styles.content}>

                <div className={styles.contactDetail}>

                    
                    <div class={styles.contact}>
                        <div class={styles.title}>Contact</div>
                        <ul>
                                <li><a href="#!"><i class="fi-xnsuxl-map-marker-solid"></i> <span>Address</span></a></li>
                                <li><a href="mailto:email@unity.unity"><i class="fi-xnluxl-envelope"></i> <span>emaul@email.com</span></a></li>
                                <li><a href="tel:+00-000000"><i class="fi-xnsrxl-phone-solid"></i> <span>+977 - 123456790 </span></a></li>
                                <li><a href="#!"><i class="fi-cnluxl-globe-solid"></i> <span>www.website.com</span></a></li>
                        </ul>   
                        
                    </div>

                    <div className={styles.contactForm}>

                    <div class={styles.title}>Write us</div>
                        <SendMsg/>
                        
                    </div>


                </div>
            </div>
            
            <div className={styles.copyright}>
                 <ul>
                    <li><a href="#!">© Unity. Allright reserved.</a></li>
                    <li><a href="#!">Terms of use.</a></li>
                    <li><a href="#!"> privacy policy</a></li>
                 </ul>

                <div>
                    <a>by Kaal Vairab</a>
                </div>
            </div>
        </footer>
    )

   }
}



export default Footer
 