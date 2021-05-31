import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Message extends Component {
    render() {
        return (
            <div>
                <h2>Message</h2>
                {this.props.message.map(msg=>{
                    <ul>
                        console.log(msg)
                        <li>{msg.name}</li>
                        <li>{msg.email}</li>
                        <li>{msg.description}</li>
                    </ul>
                })}
                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
      message : state.message.message
    }
  }

export default connect(mapStateToProps)(Message)
