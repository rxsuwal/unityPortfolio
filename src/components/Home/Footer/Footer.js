import React from 'react'

import clientsLogo from '../../../assets/img/clients-logo.jpg'

import styles from './Footer.module.scss'

import Btn from '../../UI/BtnOrange/BtnOrange'
import axios from '../../../axios-data-push'
import { Component } from 'react'
import SendMsg from '../SendMsg/SendMsg'
import { connect } from 'react-redux'

import * as actionCreator from '../../../store/actions/actionCreators/index'



class Footer extends Component {

   

    componentDidMount(){
        this.props.initInfo()
       
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
                                <li><a href="#!"><i class="fi-xnsuxl-map-marker-solid"></i> <span>{this.props.info.address}</span></a></li>
                                <li><a href="#!"><i class="fi-xnluxl-envelope"></i> <span>{this.props.info.email}</span></a></li>
                                <li><a href="#!"><i class="fi-xnsrxl-phone-solid"></i> <span>+977 - {this.props.info.contact}</span></a></li>
                                <li><a href="#!"><i class="fi-cnluxl-globe-solid"></i> <span>{this.props.info.website}</span></a></li>
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

const mapStateToProps = state => {
    return{
  
      info : state.info.info,
  
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
     
      initInfo : ()=>dispatch(actionCreator.initInfo())
    }
  
  }



export default connect(mapStateToProps, mapDispatchToProps)(Footer)
 