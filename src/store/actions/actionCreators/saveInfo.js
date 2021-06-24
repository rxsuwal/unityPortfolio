import axios from '../../../axios-data-push'
import * as actionType from '../actionTypes'

export const saveInfo = (payload) =>{
    return dispatch=>{
        axios.put('Info.json', payload)
        .then( payload=>{
            dispatch(setInfo(payload.data));
            dispatch(setInfoStatus());
            
        }
           
        )
        .catch(err=>console.log(err))
    }
   
}

export const setInfo =(payload)=>{
    return{
        type:actionType.SET_INFO,
        payload:payload
    }
}

export const initInfo =()=>{
    return dispatch=>{
        axios.get('Info.json')
            .then(response => {
                dispatch(setInfo(response.data))   
                 })
            .catch(error =>{
                console.log('Errorr Fetching data', error)
                })
    }
}

export const setInfoStatus =()=>{
    return{
        type:actionType.SET_INFO_STATUS
    }
}