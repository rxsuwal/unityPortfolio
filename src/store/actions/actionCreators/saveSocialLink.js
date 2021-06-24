import * as actionType from '../actionTypes'

import axios from '../../../axios-data-push'

export const saveSocialLink =(payload)=>{
    return dispatch=>{
        axios.put('/Social.json',payload)
                .then(rspnse=>{
                    dispatch(setSocialLinkStatus())
                })
                .catch(err=>console.log(err))
    }
}

export const setSocialLinkStatus = ()=>{
    return{
        type:actionType.SET_SOCIAL_LINK_STATUS
    }
}


export const setSocialLink = (payload)=>{
    return{
        type:actionType.SET_SOCIAL_LINK,
        payload:payload
    }
}
export const initSocialLink =()=>{
    return dispatch=>{
        axios.get('/Social.json')
                .then(rspnse =>{
                    console.log(rspnse.data)
                    dispatch(setSocialLink(rspnse.data))
                })
                .catch(err=>console.log(err))

    }
}