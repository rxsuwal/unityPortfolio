import React, { Component } from 'react'

import styles from './Portfolio.module.scss'

import Input from '../../UI/Form/Input/Input'

import { connect } from 'react-redux'
import * as actionCreator from '../../../store/actions/actionCreators/index'
import Layout from '../Layout/Layout'
import ImgUpload from '../../UI/ImgUpload/ImgUpload'
import Sidedrawer from '../../UI/Sidedrawer/Sidedrawer'

import {storage} from  '../../../firebase/index'

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
        },
        formIsValid:false,
        icon:{
          url:'',
          valid:false,
          progress:''
        },
        siderDrawer:false
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
          formIsValid = updatedportfolio[inputIdentifier].valid && formIsValid && this.state.icon.valid
        }
    
        this.setState({portfolio:updatedportfolio, formIsValid:formIsValid});
    
        // console.log(updatedportfolioElement)
    
    
      }

      imgUploadOnChange = (e)=>{

        const img = e.target.files[0]
    // console.log(img)
    const uploadImg = storage.ref(`images/portfolio/${img.name}`).put(img);
    uploadImg.on(
      'state_changed',
      snapshot =>{
        const progress = Math.round(
          (snapshot.bytesTransferred/snapshot.totalBytes)*100
        )
        this.setState({ 
          icon :{...this.state.icon, progress}
        })
        console.log(progress)
      },

      error =>{
        console.log(error)
      },

      ()=>{
        storage.ref('images/portfolio')
                .child(img.name)
                .getDownloadURL()
                .then(url =>{
                  {console.log(url)}
                  this.setState({
                    icon : {...this.state.icon, url,valid:true},
                    formIsValid:true
                  })
                })
      }
      
    )

      }
    
      
      submitData=(e)=>{
        e.preventDefault();
      }

      portfolioValue=()=>{
        return{
          title :this.state.portfolio.title.value,
          description:this.state.portfolio.description.value,
           icon: this.state.icon.url,

        }
      }

      componentDidMount(){
        this.props.initPortfolio();
      }

      // MODAL HANDLER
      sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false})
    
      }
    
      sideDrawerOpenHandler = () =>{
        this.setState({showSideDrawer:true})
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

  <ImgUpload change={(e)=>this.imgUploadOnChange(e)} progress={this.state.icon.progress}/>

    
              <button className={styles.button} 
                      disabled={!this.state.formIsValid} 
                      onClick={()=>this.props.savePortfolio(this.portfolioValue())}>Submit</button>
          </form>
        )
    
    
        return (
          <Layout>
            <h2>portfolio</h2>
            
            <div className={styles.portfolioList}>   
           {this.props.portfolio.map(portfolio=>(
              <article>
                <h4>{portfolio.title}</h4>
                <p>{portfolio.description}</p>
                <picture><img src={portfolio.icon} alt=''/></picture>
                <button onClick={()=>this.props.deletePortfolio(portfolio.id)}>Delete</button>
                <button>Edit</button>
              </article>
            ))}
            </div>

              <button onClick={this.sideDrawerOpenHandler}>ADD MORE</button>
            <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}>
              {form}  
              </Sidedrawer>
        

        
          </Layout>
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
    savePortfolio : (payload)=>dispatch(actionCreator.savePortfolio(payload)),
    initPortfolio : ()=>dispatch(actionCreator.initPortfolio()),
    deletePortfolio : (id)=>dispatch(actionCreator.deletePortfolio(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Portfolio)
