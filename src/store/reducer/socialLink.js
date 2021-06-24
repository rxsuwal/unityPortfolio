import * as  actionType from '../actions/actionTypes'

const initialState = {
    links : [],
    updateStatus:false
}

const reducer = (state = initialState,action)=>{

    switch (action.type) {

        case actionType.SET_SOCIAL_LINK:
            return{
                ...state,
                links:action.payload
            }

        case actionType.SET_SOCIAL_LINK_STATUS:
            return{
                updateStatus:true
            }
        default:
            return state;
    }


}

export default reducer