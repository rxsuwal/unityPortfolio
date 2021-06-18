import React, { Component } from 'react'

import styles from './Services.module.scss'

import Input from '../../UI/Form/Input/Input'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import { connect } from 'react-redux'
import Layout from '../Layout/Layout'
import ImgUpload from '../../UI/ImgUpload/ImgUpload'
import Sidedrawer from '../../UI/Sidedrawer/Sidedrawer'

import {storage} from '../../../firebase/index'


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
            //  icon:{
            //     elementType:'input',
            //     elementConfig:{
            //         type:'file',
            //         placeholder:'services icons'

            //     },
            //     value:'',
            //     validation:{
            //         required:true,
            //     },
            //     valid:false,
            //     touched:false
            //     },
        },
        formIsValid:false,
        icon:{
          url:'',
          progress:'',
          valid:false
        },
        sideDrawer:false,
    }

    componentDidMount(){
      this.props.initServices();
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
          formIsValid = updatedServices[inputIdentifier].valid && formIsValid && this.state.icon.url
        }
    
    
        this.setState({services:updatedServices, formIsValid:formIsValid});
    
       
    
    
      }

      imgUploadOnChange = (e)=>{
        const img = e.target.files[0]
    // console.log(img)
    const uploadImg = storage.ref(`images/services/${img.name}`).put(img);
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
        storage.ref('images/services')
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

      servicesValue =()=>{
        return{
          title: this.state.services.title.value,
          description: this.state.services.description.value,
          icon: this.state.icon.url

        }
      }

      sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false})
    
      }
    
      sideDrawerOpenHandler = () =>{
        this.setState({showSideDrawer:true})
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
    
              <ImgUpload change={(e)=>this.imgUploadOnChange(e)} progress={this.state.icon.progress}/>

              <button className={styles.button} 
                      disabled={!this.state.formIsValid}
                      onClick={()=>this.props.saveServices(this.servicesValue())}
                      >Submit</button> 
          </form>
        )
    
    
        return (
          <Layout>
            <h2>services</h2>
    
            <div className={styles.serviceList}>

                {this.props.services.map(services=>(
                    <article>
                      <div className={styles.content}>
                        <div>
                        <h4>{services.title}</h4>
                        <p>{services.description}</p>
                        </div>
                       <div> <picture><img src={services.icon} alt=''/></picture></div>
                      </div>

                      <button onClick={()=>this.props.deleteServices(services.id)}>DELETE</button>
                      <button>EDIT</button>

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

const mapStateToProps = state =>{
  return{
    services : state.services.services
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    saveServices : (payload)=>dispatch(actionCreator.saveServices(payload)),
    initServices : ()=>dispatch(actionCreator.initServices()),
    deleteServices:(id)=>dispatch(actionCreator.deleteServices(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Services)
