import axios from '../../../axios-data-push'
import * as actionType from '../actionTypes'

export const savePortfolio =(payload)=>{
    return dispatch=>{
        axios.post('/Portfolio.json', payload)
                .then(rspnse=>{
                    dispatch(addPortfolio())
                })
                .catch(err=>console.log(err))
    }
   
}

export const addPortfolio = ()=>{
    return{
        type:actionType.ADD_PORTFOLIO
    }
}

export const setPortfolio = (payload)=>{
    return{
        type:actionType.SET_PORTFOLIO,
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

export const setPortfolioStatus =()=>{
    return{
        
    }
}