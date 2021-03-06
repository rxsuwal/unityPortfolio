import React, { Component } from 'react'
import { connect } from 'react-redux';
import Input from '../../UI/Form/Input/Input'

import * as actionCreator from '../../../store/actions/actionCreators/index'

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

class SendMsg extends Component {

    state ={
        message:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Name'

                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
                },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Email'

                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
                },
            description:{
                    elementType:'textarea',
                    elementConfig:{
                        type:'text',
                        placeholder:'description'

                    },
                    value:'',
                    validation:{
                        required:true,
                    },
                    valid:false,
                    touched:false
                    },
             
        },
        formIsValid:false
    }


    checkValidity = (value, rules) =>{

        let isValid = true;
    
        if(rules.required){
          isValid = value.trim() !== '' && isValid;
        }
        
        if ( rules.minLength){
          isValid = value.length >= rules.minLength && isValid
        }
    
        if ( rules.maxLength){
          isValid = value.length <= rules.maxLength && isValid
        }
        console.log(isValid)
        return isValid
        
        
      }
    
    
      inputChangeHandler =(e, inputIdentifier) =>{
    
        let updatedmessage = {
          ...this.state.message
        }
    
        let updatedmessageElement = {
          ...updatedmessage[inputIdentifier]
        }
       
        updatedmessageElement.value = e.target.value;
        updatedmessageElement.valid = this.checkValidity(updatedmessageElement.value, updatedmessageElement.validation)
        updatedmessageElement.touched = true;
        updatedmessage[inputIdentifier] = updatedmessageElement;
    
    
        let formIsValid = true;
    
        for(let inputIdentifier in updatedmessage){
          formIsValid = updatedmessage[inputIdentifier].valid && formIsValid
        }
    
    
        this.setState({message:updatedmessage, formIsValid:formIsValid});
    
        
    
    
      }

      submit = (e) =>{
          e.preventDefault();
          this.setState(
           {
            ...this.state,
            message:{
              name:{
                  elementType:'input',
                  elementConfig:{
                      type:'text',
                      placeholder:'Name'
  
                  },
                  value:'',
                  validation:{
                      required:true,
                  },
                  valid:false,
                  touched:false
                  },
              email:{
                  elementType:'input',
                  elementConfig:{
                      type:'email',
                      placeholder:'Email'
  
                  },
                  value:'',
                  validation:{
                      required:true,
                  },
                  valid:false,
                  touched:false
                  },
              description:{
                      elementType:'textarea',
                      elementConfig:{
                          type:'text',
                          placeholder:'description'
  
                      },
                      value:'',
                      validation:{
                          required:true,
                      },
                      valid:false,
                      touched:false
                      },
               
          },
         
           }
          )
               }

      
      msgPayload = () => {

        return{
            name:this.state.message.name.value,
            email:this.state.message.email.value,
           description:this.state.message.description.value,
        }
      }
    
     
      
    render(){

        const formElementArray = [];
        for (let key in this.state.message){
          formElementArray.push({
            id:key,
          config: this.state.message[key]
          })
    
        }
    
        let form = (
          <form onSubmit={this.submit}>
            
            {formElementArray.map(formElement =>(
              <Input 
                  ref={(ref) => this.Input= ref}
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid = {!formElement.config.valid}
                  shouldValidate = {formElement.config.validation}
                  touched = {formElement.config.touched}
                  changed={(e) => this.inputChangeHandler(e,formElement.id)}
                  />
            ))}
    
    
              <button 
                     disabled={!this.state.formIsValid} 
                      onClick={()=>this.props.sendMessage(this.msgPayload())}>Submit</button>
          </form>
        )

        //TOAST MSG
        if(this.props.sendStatus){
          toast.success('Message Sent',{position: "bottom-right",
                                              autoClose: 5000,
                                              hideProgressBar: false,
                                              closeOnClick: true,
                                              pauseOnHover: true,
                                              draggable: true,
                                              progress: undefined,
                                              })
        }
            
        return (
          <div >
            {form}  

            <ToastContainer position="bottom-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          />

          </div>
        )
      }
}

const mapStateToProps = state => {
    return{
      message : state.message.message,
      sendStatus:state.message.sendStatus
    }
  }
  
const mapDispatchToProps = dispatch => {
    return{
      sendMessage : (payload)=>dispatch(actionCreator.sendMsg(payload))
    }
  }



  export default connect( mapStateToProps,mapDispatchToProps)(SendMsg)
