import * as actionType from '../actionTypes'

export const saveServices = (payload) =>{
    console.log(payload)
    return{
        type:actionType.SAVE_SERVICES,
        payload:payload
    }
}