import * as actionType from '../actions/actionTypes'

const initialState = {
    info : [],
    status:false
}

const reducer = (state = initialState, action)=>{

    switch(action.type){

          case actionType.SET_INFO:
              
              return{
                  ...state,
                  info:action.payload
              }
        case actionType.SET_INFO_STATUS:
            return{
                ...state,
                status:true
            }
            

        default:
            return state

           
    }

    

}


export default reducer