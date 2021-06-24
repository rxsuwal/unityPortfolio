import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../UI/Spinner/Spinner'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import Layout from '../Layout/Layout'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import DeleteButton from '../UI/DeleteButton/DeleteButton'

 class Message extends Component {

    componentDidMount(){
        this.props.initMsg()
    }

    render() {

        // MESSAGE LIST
        let msglist=[]
        if(this.props.message){
            msglist=( 
                this.props.message.map(msg=>(
                    <ul>
                    <li>{msg.name}</li>
                    <li>{msg.email}</li>
                    <li>{msg.description}</li>
                    <DeleteButton clicked={()=>this.props.deleteMsg(msg.id)}>delete</DeleteButton>
                </ul>
                ))
            )

            if(msglist.length < 1){
                msglist=(
                    <div><SentimentDissatisfiedIcon/>
                    <h3>NOBODY MESSAGED YET !</h3></div>)
    
            }
        }
       
        else{
            msglist=(<Spinner/>)
        }

        // DELETE TOAST
        if(this.props.deleteStatus){
            toast.success('Deleted', {position: "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        });
            
            setTimeout(window.location.reload(),6000)
                                    
        }
        
        
        return (
            <Layout>
                <h2>Message</h2>

                {msglist}

                <ToastContainer position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/>
            </Layout>
        )
    }
}


const mapStateToProps = state => {
    return{
      message : state.message.message,
      deleteStatus : state.message.deleteStatus
    }
  }

const mapDispatchToProps = dispatch =>{
    return{
        initMsg : ()=>dispatch(actionCreator.initMsg()),
        deleteMsg : (id)=>dispatch(actionCreator.deleteMsg(id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message)
