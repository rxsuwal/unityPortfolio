import * as actions from '../actions'

const initialState = {
    portfolio : []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actions.savePortfolio:
           
          return{
              ...state,
              portfolio:state.portfolio.concat({title:action.portfolioDATA.title,
                                                description:action.portfolioDATA.description,
                                                    img:action.portfolioDATA.img})
          }
            

        default:
            return state

           
    }

    

}


export default reducer