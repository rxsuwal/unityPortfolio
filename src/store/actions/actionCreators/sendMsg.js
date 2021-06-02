import * as actionType from '../actionTypes'

export const sendMsg = (payload) =>{
    return{
        type:actionType.SEND_MSG,
        payload:payload
    }
}