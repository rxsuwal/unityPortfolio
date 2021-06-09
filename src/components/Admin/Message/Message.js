import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../UI/Spinner/Spinner'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import Navbar from '../Navbar/Navbar'

 class Message extends Component {

    componentDidMount(){
        this.props.initMsg()
    }

    render() {

        let msglist=[]
        if(this.props.message){
            msglist=( 
                this.props.message.map(msg=>(
                    <ul>
                    <li>{msg.name}</li>
                    <li>{msg.email}</li>
                    <li>{msg.description}</li>
                </ul>
                ))
            )
        }
        else{
            msglist=(<Spinner/>)
        }
        
        return (
            <div>
                <Navbar/>
                <h2>Message</h2>
               { console.log(this.props.message)}

                    {msglist}
                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
      message : state.message.message
    }
  }

const mapDispatchToProps = dispatch =>{
    return{
        initMsg : ()=>dispatch(actionCreator.initMsg())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message)
