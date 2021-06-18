import * as actionType from '../actions/actionTypes'

const initialState ={
    services :[]
}


const reducer = (state = initialState,action) =>{

    switch(action.type){
        case actionType.SAVE_SERVICES:
            console.log(action.payload)
            return{
                ...state,
                services:state.services.concat(action.payload)
            }
        case actionType.SET_SERVICES:
                console.log(action.payload)
                return{
                    ...state,
                    services:state.services.concat(action.payload)
                }
        case actionType.DELETE_SERVICES:
            return{
                ...state,
                services:state.services.filter(state => state.id !== action.payload)
            }

        default:
            return state
    }

}

export default reducer