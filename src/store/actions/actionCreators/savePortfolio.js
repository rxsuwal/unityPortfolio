import axios from '../../../axios-data-push'
import * as actionType from '../actionTypes'

export const savePortfolio =(payload)=>{
    return dispatch=>{
        axios.post('/Portfolio.json', payload)
                .then(rspnse=>{
                    dispatch(setPortfolio(rspnse.data))
                })
                .catch(err=>console.log(err))
    }
   
}


export const setPortfolio = (payload)=>{
    return{
        type:actionType.SAVE_PORTFOLIO,
        payload:payload
    }
}

export const initPortfolio = (payload) =>{
    return dispatch=>{
        axios.get()
    }
}