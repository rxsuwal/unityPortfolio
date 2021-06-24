import * as actionType from '../actions/actionTypes'

const initialState ={
    services :[],
    deleteStatus : false,
    addStatus:false,
    editStatus:false
}


const reducer = (state = initialState,action) =>{

    switch(action.type){
        case actionType.ADD_SERVICES:
            console.log(action.payload)
            return{
                ...state,
                addStatus:true
            }
        case actionType.SET_SERVICES:
                console.log(action.payload)
                return{
                    ...state,
                    services:state.services.concat(action.payload),
                    
                }
        case actionType.DELETE_SERVICES:
            return{
                ...state,
                services:state.services.filter(state => state.id !== action.payload),
                deleteStatus:true
            }

        default:
            return state
    }

}

export default reducer