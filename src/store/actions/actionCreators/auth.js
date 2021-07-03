import axios from 'axios'
import * as actionType from '../actionTypes'

export const authStart =()=>{
    return{
        type:actionType.AUTH_START
    }
}

export const authSuccess =(payload)=>{
    return{
        type:actionType.AUTH_SUCCESS,
        payload:payload
    }
}

export const authFail =(err)=>{
    return{
        type:actionType.AUTH_FAIL,
        error:err
    }
}

export const authOut =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return{
        type:actionType.AUTH_OUT
    }
}

export const checkAuthTimeOut =(time)=>{
    console.log(time)
    return dispatch=>{
        setTimeout(()=>{
            dispatch(authOut())
        },time*1000)
    }
}
export const auth =(email,password)=>{
    console.log(email,password)
    return dispatch=>{

        dispatch(authStart())

        let authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_HQYEC6LdTqeDKN5OsIRf_cG0QlA5b6Y', authData)
                .then(rspnse=>{
                    console.log(rspnse.data)
                    const expirationDate = new Date(new Date().getTime() + rspnse.data.expiresIn * 1000)
                    localStorage.setItem('token',rspnse.data.idToken);
                    localStorage.setItem('expirationDate',expirationDate);
                    localStorage.setItem('userId',rspnse.data.localId)
                    dispatch(authSuccess(rspnse.data.idToken));
                   
                })
                .catch(err=>{
                    console.log('errr',err.response.data.error.message)
                    dispatch(authFail(err.response.data.error.message))
                    setTimeout(window.location.reload(),5000)
                })
 
      
    }
}

export const authIn=(email,password)=>{
    return dispatch=>{

        let authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_HQYEC6LdTqeDKN5OsIRf_cG0QlA5b6Y',authData)
                .then(rspnse=>{

                    const expirationDate = new Date(new Date().getTime() + rspnse.data.expiresIn * 1000)
                    localStorage.setItem('token',rspnse.data.idToken);
                    localStorage.setItem('expirationDate',expirationDate)
                    localStorage.setItem('userId',rspnse.data.localId)

                    console.log(rspnse.data)

                    dispatch(authSuccess(rspnse.data.idToken))
                     // dispatch(checkAuthTimeOut(rspnse.data.expiresIn))
                })
                .catch(err=>{
                    console.log(err)
                    dispatch(authFail(err.response.data.error.message))

                    setTimeout(window.location.reload(),5000)
                })
    }
}

export const authCheckState =()=>{

    return dispatch=>{
        const token = localStorage.getItem('token');
        
        if(!token){
            dispatch(authOut())
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            
            if(expirationDate > new Date()){
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token,userId))
                dispatch(checkAuthTimeOut((expirationDate.getTime()- new Date().getTime())/1000))
            }else{
                dispatch(authOut())
            }
        }
    }
}