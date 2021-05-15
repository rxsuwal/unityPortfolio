import Backdrop from  '../Backdrop/Backdrop'
import React from 'react'

import styles from './Sidedrawer.module.scss'

const Sidedrawer = (props) => { 

    let attachedClasses = [styles.sideDrawer,styles.close]
    if(props.open){
        attachedClasses = [styles.sideDrawer,styles.open]
    }
  
    return (
        <div >
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
            
            </div>
            
        </div>
    )
}

export default Sidedrawer
