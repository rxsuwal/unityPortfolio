import React, { Component } from 'react'
import { connect } from 'react-redux';
import Input from '../../UI/Form/Input/Input'

import * as actionCreator from '../../../store/actions/actionCreators/index'

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
          console.log('object')
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

        
    
    
        return (
          <div >
    
            {form}  

           
      
          </div>
        )
      }
}

const mapStateToProps = state => {
    return{
      message : state.message.message
    }
  }
  
const mapDispatchToProps = dispatch => {
    return{
      sendMessage : (payload)=>dispatch(actionCreator.sendMsg(payload))
    }
  }



  export default connect( mapStateToProps,mapDispatchToProps)(SendMsg)
