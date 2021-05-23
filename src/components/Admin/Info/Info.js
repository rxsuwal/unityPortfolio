import React, { Component } from 'react'

import styles from './Info.module.scss'

import axios from '../../../axios-data-push'

import Input from '../../../components/UI/Form/Input/Input.js'


class Info extends Component {

state ={

  info:{
    name :{
      elementType:'input',
      elementConfig:{
        type:'text',
        placeholder:'Full Name'

      },
      value:'',
      validation:{
        required:true,
      },
      valid:false,
      touched:false
    },

    email :{
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
    address :{
      elementType:'input',
      elementConfig:{
        type:'text',
        placeholder:'Address'

      },
      value:'',
      validation:{
        required:true,
      },
      valid:false,
      touched:false
    },

    contact :{
      elementType:'input',
      elementConfig:{
        type:'number',
        placeholder:'contact'

      },
      value:'',
      validation:{
        required:true,
        maxLength:10,
        minLength:10
      },
      valid:false,
      touched:false
    },
    website :{
      elementType:'input',
      elementConfig:{
        type:'text',
        placeholder:'Website'

      },
      value:'',
      validation:{
        required:true,
      },
      valid:false,
      touched:false
    },
    logo :{
      elementType:'input',
      elementConfig:{
        type:'file',
        placeholder:'logo'

      },
      value:'',
      validation:{
        required:true,
      },
      valid:false,
      touched:false
    }
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

    let updatedInfo = {
      ...this.state.info
    }

    let updatedInfoElement = {
      ...updatedInfo[inputIdentifier]
    }
   
    updatedInfoElement.value = e.target.value;
    updatedInfoElement.valid = this.checkValidity(updatedInfoElement.value, updatedInfoElement.validation)
    updatedInfoElement.touched = true;
    updatedInfo[inputIdentifier] = updatedInfoElement;


    let formIsValid = true;

    for(let inputIdentifier in updatedInfo){
      formIsValid = updatedInfo[inputIdentifier].valid && formIsValid
    }


    this.setState({info:updatedInfo, formIsValid:formIsValid});

    console.log(updatedInfoElement)


  }

  
  submitData=(e)=>{
    e.preventDefault();

    const infodata ={}
    for (let formElementIdentifier in this.state.info){
      infodata[formElementIdentifier] = this.state.info[formElementIdentifier].value
    }


    const info = {
      info : infodata
    }

    axios.post('/personalInfo.json',info)
          .then(response=>console.log(response))
          .catch(error => console.log(error))
  }


  render(){

    const formElementArray = [];
    for (let key in this.state.info){
      formElementArray.push({
        id:key,
      config: this.state.info[key]
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


          <button className={styles.button} disabled={!this.state.formIsValid}>Submit</button> 
      </form>
    )


    return (
      <div className={styles.admin}>
  
        <h2>Information</h2>

        {form}  
  
      </div>
    )
  }


  
}

export default Info
