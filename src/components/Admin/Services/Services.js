import React, { Component } from 'react'

import styles from './Services.module.scss'

import Input from '../../UI/Form/Input/Input'

import axios from '../../../axios-data-push'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import { connect } from 'react-redux'

 class Services extends Component {

    state ={
        services:{
            title:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'title'

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
             icon:{
                elementType:'input',
                elementConfig:{
                    type:'file',
                    placeholder:'services icons'

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
    
        let updatedServices = {
          ...this.state.services
        }
    
        let updatedServicesElement = {
          ...updatedServices[inputIdentifier]
        }
       
        updatedServicesElement.value = e.target.value;
        updatedServicesElement.valid = this.checkValidity(updatedServicesElement.value, updatedServicesElement.validation)
        updatedServicesElement.touched = true;
        updatedServices[inputIdentifier] = updatedServicesElement;
    
    
        let formIsValid = true;
    
        for(let inputIdentifier in updatedServices){
          formIsValid = updatedServices[inputIdentifier].valid && formIsValid
        }
    
    
        this.setState({services:updatedServices, formIsValid:formIsValid});
    
       
    
    
      }
    
      
      submitData=(e)=>{
        e.preventDefault();
    
        // const servicesData ={}
        // for (let formElementIdentifier in this.state.services){
        //     servicesData[formElementIdentifier] = this.state.services[formElementIdentifier].value
        // }
    
    
        // const services = {
        //   services : servicesData
        // }
    
        // axios.post('/services.json',services)
        //       .then(response=>console.log(response.data))
        //       .catch(error => console.log(error))
      }

      servicesValue =()=>{
        return{
          title: this.state.services.title.value,
          description: this.state.services.description.value,
          icon: this.state.services.icon.value

        }
      }

    render(){

        const formElementArray = [];
        for (let key in this.state.services){
          formElementArray.push({
            id:key,
          config: this.state.services[key]
          })
    
        }
    
        let form = (
          <form onSubmit={this.submitData}>
            
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
    
    
              <button className={styles.button} 
                      disabled={!this.state.formIsValid}
                      onClick={()=>this.props.saveServices(this.servicesValue())}
                      >Submit</button> 
          </form>
        )
    
    
        return (
          <div className={styles.services}>
      
            <h2>services</h2>
    
            {form}  

            {this.props.services.map(services=>(
              <ul>
                <li>{services.title}</li>
                <li>{services.description}</li>
                <li>{services.icon}</li>
              </ul>
            ))}
      
          </div>
        )
      }
}

const mapStateToProps = state =>{
  return{
    services : state.services.services
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    saveServices : (payload)=>dispatch(actionCreator.saveServices(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Services)
