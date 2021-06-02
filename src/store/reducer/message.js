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
        default:
            return state
    }

}

export default reducer