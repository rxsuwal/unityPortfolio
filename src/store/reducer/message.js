import * as actionType from '../actions/actionTypes'

const initialState = {
    message :[],
    deleteStatus : false,
    sendStatus:false
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.ADD_MSG:
            return{
                ...state,
                sendStatus:true

            }

        case actionType.SET_MSG:
            return{
                ...state,
                message:action.payload,
               
            }
            
        case actionType.DELETE_MSG:
            return{
                ...state,
                message:state.message.filter(state=> state.id !== action.payload),
                deleteStatus:true,
            }
            
        default:
            return state
    }

}

export default reducer