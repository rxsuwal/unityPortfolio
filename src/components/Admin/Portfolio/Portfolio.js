import React, { Component } from 'react'

import styles from './Portfolio.module.scss'

import Input from '../../UI/Form/Input/Input'

import axios from '../../../axios-data-push'
import { connect } from 'react-redux'
import * as action from '../../../store/actions'


 class Portfolio extends Component {

    state ={
        portfolio:{
            title:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Titlr of Portfolio'

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
                    placeholder:'portfolio icons'

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
    
        let updatedportfolio = {
          ...this.state.portfolio
        }
    
        let updatedportfolioElement = {
          ...updatedportfolio[inputIdentifier]
        }
       
        updatedportfolioElement.value = e.target.value;
        updatedportfolioElement.valid = this.checkValidity(updatedportfolioElement.value, updatedportfolioElement.validation)
        updatedportfolioElement.touched = true;
        updatedportfolio[inputIdentifier] = updatedportfolioElement;
    
    
        let formIsValid = true;
    
        for(let inputIdentifier in updatedportfolio){
          formIsValid = updatedportfolio[inputIdentifier].valid && formIsValid
        }
    
    
        this.setState({portfolio:updatedportfolio, formIsValid:formIsValid});
    
        console.log(updatedportfolioElement)
    
    
      }
    
      
      submitData=(e)=>{
        e.preventDefault();
    
        // const portfolioData ={}
        // for (let formElementIdentifier in this.state.portfolio){
        //     portfolioData[formElementIdentifier] = this.state.portfolio[formElementIdentifier].value
        // }
    
    
        // const portfolio = {
        //   portfolio : portfolioData
        // }
    
        // axios.post('/portfolio.json',portfolio)
        //       .then(response=>console.log(response.data))
        //       .catch(error => console.log(error))
      }

    render(){

        const formElementArray = [];
        for (let key in this.state.portfolio){
          formElementArray.push({
            id:key,
          config: this.state.portfolio[key]
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
                      onClick={()=>this.props.savePortfolio(this.state.portfolio.title.value,
                                                        this.state.portfolio.description.value,
                                                        this.state.portfolio.icon.value,
                                                       
                                                        )}>Submit</button>
          </form>
        )
    
    
        return (
          <div className={styles.portfolio}>
      
            <h2>portfolio</h2>
    
            {form}  

            {this.props.portfolio.map(portfolio=>(
              <ul>
                <li>{portfolio.title}</li>
                <li>{portfolio.description}</li>
                <li>{portfolio.img}</li>
              </ul>
            ))}
      
          </div>
        )
      }
}

const mapStateToProps = state => {
  return{
    portfolio : state.portfolio.portfolio
  }
}

const mapDispatchToProps =dispatch => {
  return{
    savePortfolio : (title,description,img)=>dispatch({type:action.savePortfolio,
                                                        portfolioDATA:{title:title,
                                                                        description:description,
                                                                        img:img}})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Portfolio)
