import React, { Component } from 'react'

import styles from './Admin.module.scss'

import axios from '../../axios-data-push'


class Admin extends Component {

state ={

  info:{
    personal:{
      name : "test",
    email : 'test@test.com' ,
    address : 'test address',
    number: 9860115588,
    },

    business :{
company : 'Kaal Vairab'
    }
  }
}


  submitData=()=>{

    const info = {
      info : this.state.info
    }

    axios.post('/personalInfo.json',info)
          .then(response=>console.log(response))
          .catch(error => console.log(error))
  }


  render(){
    return (
      <div className={styles.admin}>
  
        <h2 className={styles.header}>Enter Details</h2>
  
        
  
        <form>
  <h2>Personal Information</h2>
          
            <label>
              Name :
            <input type='text' placeholder='Full Name' required/>
            </label>
           <label>
             Email:
           <input type='email' placeholder='Email' required/>
           </label>
            <label>
              Address:
            <input type='text' placeholder='Address' required/>
            </label>
        </form>
  
        <button onClick={this.submitData}>Submit</button>
        
      </div>
    )
  }


  
}

export default Admin
