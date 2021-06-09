import * as actionType from '../actions/actionTypes'

const initialState = {
    portfolio : []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actionType.SAVE_PORTFOLIO:
           
          return{
              ...state,
              portfolio:state.portfolio.concat(action.payload)
          }
          case actionType.SET_PORTFOLIO:
           
            return{
                ...state,
                portfolio:state.portfolio.concat(action.payload)
            }
            

        default:
            return state

           
    }

    

}


export default reducer