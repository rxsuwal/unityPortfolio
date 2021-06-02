import * as actionType from '../actionTypes'

export const saveInfo = (payload) =>{
    return{
        type:actionType.SAVE_INFO,
        payload:payload
        
    }

    
}