import * as actionType from '../actions/actionTypes'

const initialState = {
    info : []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actionType.SAVE_INFO:
          return{
              ...state,
              info:action.payload
          }

          case actionType.SET_INFO:
              return{
                  ...state,
                  info:action.payload
              }
            

        default:
            return state

           
    }

    

}


export default reducer