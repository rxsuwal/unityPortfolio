import React, { Component } from 'react'

import axios from '../../axios-data-push'


 class Dashboard extends Component {


  componentDidMount(){
    axios.get('/personalInfo.json')
          .then(respnse=>console.log(respnse.data))
          .catch(error=>console.log(error))
  }


  render() {
    return (
      <div>
        <h2>Personal Information</h2>

        <div>
          <div><strong>Name : </strong></div>
          <div><strong>Email : </strong></div>
          <div><strong>Address : </strong></div>
        </div>
      </div>
    )
  }
}

export default Dashboard
