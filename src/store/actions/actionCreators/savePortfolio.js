import axios from '../../../axios-data-push'
import * as actionType from '../actionTypes'

export const savePortfolio =(payload)=>{
    return dispatch=>{
        axios.post('/Portfolio.json', payload)
                .then(rspnse=>{
                    console.log(rspnse.data)
                    dispatch(setPortfolio(payload))
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

export const initPortfolio = () =>{
    return dispatch=>{
        axios.get('Portfolio.json')
                .then(rspnse=>{
                    console.log(rspnse.data)
                    const portfolio=[]
                    for ( let key in rspnse.data){
                        portfolio.push({
                            ...rspnse.data[key],
                            id:key
                        })
                    }
                    dispatch(setPortfolio(portfolio))
                })
    }
}


export const deletePortfolio = (e)=>{
    console.log(e)

//   return dispatch=>{
//       axios.delete('Portfolio.json/')
//             .then(rspnse=>{
//                 console.log(rspnse)
//             })
//             .catch(err=>console.log(err))
//   }
}