import * as actionType from '../actionTypes'

export const savePortfolio =(payload)=>{
    return{
        type:actionType.SAVE_PORTFOLIO,
        payload:payload
    }
}