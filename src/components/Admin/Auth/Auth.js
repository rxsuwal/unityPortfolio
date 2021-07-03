import React,{useState} from 'react'

import AddBtn from '../UI/AddBtn/AddBtn'
import EditButton from '../UI/EditButton/EditButton'

import * as styles from './Auth.module.scss'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import { connect } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Redirect } from 'react-router'

const Auth = (props) => {

    const [credential, setCredential] = useState({
        email:'',
        password:''
    })

    const onSubmit =(e)=>{
        e.preventDefault()
    }

    const inputOnchange =(e)=>{
        const value = e.target.value;
        const name = e.target.name;

        setCredential((prevValue)=>{
            if(name==='email'){
                return{
                    email:value,
                    password:prevValue.password
                }
            }else if(name === 'password'){
                return{
                    email:prevValue.email,
                    password:value
                }
            }
        })

    }

 
    if(props.error != null){
        toast.success(props.error, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        console.log('toast msg', props.error)
       
    }else if(props.token !=null){
        toast.success('Sign up Successfull')
        console.log('toast msg', props.token)


    }

    return (
        <div>

            {props.token ? <Redirect to="/admin/information" /> : null}
           
           <form className={styles.authForm} onSubmit={onSubmit}>
           <h1>Admin Login</h1>
               <label>
                   <input type='email' 
                            name='email'
                            value={credential.email}
                            placeholder='Email'
                            onChange={inputOnchange}
                             />
               </label>
                <br/>
               <label>
                   <input type='password'
                            name='password'
                            value={credential.password}
                            placeholder='Password'
                            onChange={inputOnchange} />
               </label>

               <EditButton clicked={()=>props.onAuth(credential.email,credential.password)}  >SIGN UP</EditButton>

               <AddBtn clicked={()=>props.onAuthIn(credential.email,credential.password)}  >SIGN IN</AddBtn>

               </form> 

               <ToastContainer position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        error : state.auth.error,
        token:state.auth.token,
        status:state.auth.status
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAuth:(email,password)=>dispatch(actionCreator.auth(email,password)),
        onAuthIn:(email,password)=>dispatch(actionCreator.authIn(email,password))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)
