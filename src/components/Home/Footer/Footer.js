import React from 'react'

import clientsLogo from '../../../assets/img/clients-logo.jpg'

import styles from './Footer.module.scss'

import Btn from '../../UI/BtnOrange/BtnOrange'



const Footer = () => {
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
                                <li><a href="#!"><i class="fi-xnsuxl-map-marker-solid"></i> <span>121 King Street, Melbourne Victoria 3000 Australias</span></a></li>
                                <li><a href="mailto:email@unity.unity"><i class="fi-xnluxl-envelope"></i> <span>email@unity.unity</span></a></li>
                                <li><a href="tel:+00-000000"><i class="fi-xnsrxl-phone-solid"></i> <span>+00-000000</span></a></li>
                                <li><a href="#!"><i class="fi-cnluxl-globe-solid"></i> <span> www.unity.unity</span></a></li>
                        </ul>   
                        
                    </div>

                    <div className={styles.contactForm}>

                    <div class={styles.title}>Write us</div>

                        <form action="#!">
                                <label>
                                    <input type="text" placeholder="Name" required />
                                </label>
                                    <br/>
                                <label>
                                    <input type="email" placeholder="Email" required />
                                </label>
                                <br/>
                                <label>
                                <textarea name="" id="" cols="30" rows="5" placeholder="Comments"/>

                                </label>
                                <br/>
                                <button>Send</button>
                        </form>
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

export default Footer
 