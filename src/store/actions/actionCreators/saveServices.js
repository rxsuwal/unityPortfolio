import * as actionType from '../actionTypes'
import axios from '../../../axios-data-push'

export const saveServices = (payload) =>{

    return dispatch =>{
        axios.post('/Services.json',payload)
                .then(rspnse=>{
                  
                    dispatch(setServices(payload))

                })
                .catch(err=> console.log(err))
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

export const deleteServices =(id)=>{
    return dispatch=>{
        axios.delete('Services/' + id +".json")
                .then(rspnse =>{
                    dispatch(deleteServicesLocal(id))
                })
                .catch(err=>{
                    console.log(err)
                })
    }
}