import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import * as styles from './Layout.module.scss'

const Layout = (props) => {

        let layout=null

        if(props.token != null){
            layout=( <div className={styles.layout}>
                <aside>
                    <Navbar/>
                </aside>
                <main>
                    {props.children}
                </main>
    
                
            </div>)
        }
        else{
            layout=(<Redirect to='/admin'/>)
        }


    return (

       
       <div>{layout}</div>
    )
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
     
    }
}


export default connect(mapStateToProps,null)(Layout)
