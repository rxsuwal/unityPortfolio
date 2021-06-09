import * as actionType from '../actionTypes'

import axios from '../../../axios-data-push'

export const sendMsg = (payload) =>{

    return dispatch =>{
        axios.post('/Message.json', payload)
                .then(response=>{
                    console.log('Message sent', response)
                })
                .catch(err=>{
                    console.log('Error', err)
                })
    }
    // return{
    //     type:actionType.SEND_MSG,
    //     payload:payload
    // }
}

export const setMsg = (payload)=>{
    return{
        type:actionType.SET_MSG,
        payload:payload
    }

}

export const initMsg = ()=>{
    return dispatch=>{
        axios.get('/Message.json')
                .then(rspnse=>{
                    const msg=[]
                    for ( let key in rspnse.data){
                        msg.push({
                            ...rspnse.data[key],
                            id:key
                        })
                    }
                    dispatch(setMsg(msg))
                })
                .catch(err=>{
                    console.log(err)
                })
    }
}