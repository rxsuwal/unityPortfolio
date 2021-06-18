import * as actionType from '../actions/actionTypes'

const initialState = {
    message :[]
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.SEND_MSG:
            return{
                ...state,
                message:state.message.concat(action.payload)

            }
        case actionType.SET_MSG:
            return{
                ...state,
                message:action.payload
            }
        case actionType.DELETE_MSG:
            return{
                ...state,
                message:state.message.filter(state=> state.id !== action.payload)
            }
            
        default:
            return state
    }

}

export default reducer