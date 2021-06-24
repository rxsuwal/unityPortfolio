import * as actionType from '../actions/actionTypes'

const initialState = {
    portfolio : [],
    addStatus:false,
    deleteStatus:false,
    editStatus:false
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actionType.ADD_PORTFOLIO:
           
          return{
              ...state,
              addStatus:true
          }
          
        case actionType.SET_PORTFOLIO:
           
            return{
                ...state,
                portfolio:state.portfolio.concat(action.payload)
            }

        case actionType.DELETE_PORTFOLIO:

           return{
               ...state,
               portfolio:state.portfolio.filter(state => state.id !== action.payload),
               deleteStatus:true
           }
            

        default:
            return state

           
    }

    

}


export default reducer