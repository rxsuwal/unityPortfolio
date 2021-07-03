import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../../store/actions/actionCreators/index'

import { Redirect } from 'react-router-dom'


const AuthOut = (props) => {

    useEffect(() => {
        console.log('authout')
       props.OnAuthOut()
        
    }, [])
    
  


    return (
        <Redirect to='/admin'/>
    )
}



const mapDispatchToProps = dispatch =>{
    return{
        OnAuthOut:()=>dispatch(actionCreator.authOut())
    }
}
export default connect(null,mapDispatchToProps)(AuthOut)
