import * as actionType from '../actionTypes'
import axios from '../../../axios-data-push'

export const saveServices = (payload,token) =>{

    return dispatch =>{
        axios.post('/Services.json?auth=' + token,payload)
                .then(rspnse=>{
                  
                    dispatch(addServices(payload))

                })
                .catch(err=> console.log(err))
    }
}

export const addServices = (payload) =>{
    return{
        type: actionType.ADD_SERVICES,
        payload:payload
    }
}

export const setServices = (payload) =>{
    return{
        type: actionType.SET_SERVICES,
        payload:payload
    }
}

export const initServices = ()=>{
    return dispatch=>{
        axios.get('Services.json')
                .then(rspnse=>{
                    console.log(rspnse.data)
                    const data = [];
                    for ( let key in rspnse.data){
                        data.push({
                            ...rspnse.data[key],
                            id:key
                        })
                    }
                    dispatch(setServices(data))
                })
                .catch(err=> console.log(err))
    }

}

export const deleteServicesLocal =(id)=>{
    return{
        type:actionType.DELETE_SERVICES,
        payload:id
    }
}

export const deleteServices =(id,token)=>{
    return dispatch=>{
        axios.delete('Services/' + id +".json/?auth=" + token)
                .then(rspnse =>{
                    dispatch(deleteServicesLocal(id))
                })
                .catch(err=>{
                    console.log(err)
                })
    }
}

export const setServicesStatus = ()=>{
    return{
        
    }
}