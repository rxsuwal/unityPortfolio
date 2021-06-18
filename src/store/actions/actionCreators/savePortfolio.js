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

export const deletePortfolioLocal =(id)=>{
    return{
        type:actionType.DELETE_PORTFOLIO,
        payload:id 
    }
}

export const deletePortfolio = (id)=>{

    console.log(id)

  return dispatch=>{
      axios.delete('Portfolio/' + id + '.json')
            .then(rspnse=>{
                console.log(rspnse)
               dispatch(deletePortfolioLocal(id))
            })
            .catch(err=>console.log(err))
  }
}