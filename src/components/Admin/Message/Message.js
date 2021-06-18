import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../UI/Spinner/Spinner'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import Layout from '../Layout/Layout'

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
                    <button onClick={()=>this.props.deleteMsg(msg.id)}>DELETE</button>
                </ul>
                ))
            )

            if(msglist.length < 1){
                msglist=(<p>No messages YET</p>)
    
            }
        }
       
        else{
            msglist=(<Spinner/>)
        }
        
        return (
            <Layout>
                <h2>Message</h2>

                {msglist}
            </Layout>
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
        initMsg : ()=>dispatch(actionCreator.initMsg()),
        deleteMsg : (id)=>dispatch(actionCreator.deleteMsg(id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message)
