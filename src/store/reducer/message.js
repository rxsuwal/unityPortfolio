import * as actions from '../actions'

const initialState = {
    message :[]
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actions.sendMessage:
            console.log(action.payload)
            return{
                ...state,
                message:state.message.concat(action.payload)

            }
        default:
            return state
    }

}

export default reducer