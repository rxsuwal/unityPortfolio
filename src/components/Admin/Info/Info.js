import React, { Component } from 'react'

import styles from './Info.module.scss'


import Input from '../../../components/UI/Form/Input/Input.js'

import {connect} from 'react-redux'

import Spinner from '../../UI/Spinner/Spinner'
import * as actionCreator from '../../../store/actions/actionCreators/index'
import ImgUpload from '../../UI/ImgUpload/ImgUpload'
import { storage } from '../../../firebase'
import Layout from '../Layout/Layout'
import Sidedrawer from '../../UI/Sidedrawer/Sidedrawer'
import Button from '../Button/Button'


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
        type:'url',
        placeholder:'Website'

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
  logo:{
    url:'',
    progress:'',
    valid:false
     },
  showSideDrawer:false
  
 
};



componentDidMount(){
  this.props.initInfo()
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
      formIsValid = updatedInfo[inputIdentifier].valid && formIsValid && this.state.logo.valid
    }

    this.setState({info:updatedInfo,formIsValid:formIsValid})

    // if(this.state.logo.valid){
    //   this.setState({formIsValid:true})
    // }
  }

  
  imgOnchange = (e)=>{

    const img = e.target.files[0]
    const uploadImg = storage.ref(`images/logo/${img.name}`).put(img);
    uploadImg.on(
      'state_changed',
      snapshot =>{
        const progress = Math.round(
          (snapshot.bytesTransferred/snapshot.totalBytes)*100
        )
        this.setState({ 
          logo :{...this.state.logo, progress}
        })
        console.log(progress)
      },

      error =>{
        console.log(error)
      },

      ()=>{
        storage.ref('images/logo')
                .child(img.name)
                .getDownloadURL()
                .then(url =>{
                  {console.log(url)}
                  this.setState({
                    logo : {...this.state.logo, url,valid:true},
                    formIsValid:true
                  })
                })
      }

    )
    

}


  submitData=(e)=>{
    e.preventDefault();
  }

  infoValue = () =>{
    return{
      name:this.state.info.name.value,
      email:this.state.info.email.value,
      address:this.state.info.address.value,
      contact: this.state.info.contact.value,
      website: this.state.info.website.value,
      logo:this.state.logo.url,

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
    for (let key in this.state.info){
      formElementArray.push({
        id:key,
      config: this.state.info[key]
      })

    }

    let form = (
      <form onSubmit={this.submitData} >
        
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

      <ImgUpload change={(e)=>this.imgOnchange(e)} progress={this.state.logo.progress}/>
      {console.log(this.state.logo)}

      <button className={styles.button} 
                disabled={!this.state.formIsValid} 
                onClick={()=>this.props.saveInfo(this.infoValue())}>Submit</button> 

         
      </form>
    )

    let details = null
    // eslint-disable-next-line no-lone-blocks
    {this.props.info.name ? 
          details =(
          <div className={styles.details}>
              <div>
                  <div className={styles.item}><strong>NAME :</strong> {this.props.info.name}</div>
                  <div><strong>EMAIL :</strong> {this.props.info.email}</div>
                  <div><strong>ADDRESS :</strong> {this.props.info.address}</div>
                  <div><strong>CONTACT :</strong> {this.props.info.contact}</div>
                  <div><strong>WEBSITE :</strong> {this.props.info.website}</div>
              </div>
              <picture><img src={this.props.info.logo} alt=''/> </picture>
          </div>
        ) : 
        details=(<Spinner/>)
      }

   


    return (
      <Layout>
        
        <h1>INFORMATION</h1>
        {details} 

          <Button clicked={this.sideDrawerOpenHandler}>edit</Button>

        <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}>
            {form} 
        </Sidedrawer>

         
      </Layout>
    )
  }

  

  
}

const mapStateToProps = state => {
  return{

    info : state.info.info,

  }
}


const mapDispatchToProps = dispatch => {
  return{
    saveInfo : (payload)=>dispatch(actionCreator.saveInfo(payload)),
    initInfo : ()=>dispatch(actionCreator.initInfo())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Info)
