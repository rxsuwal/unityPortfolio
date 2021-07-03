import * as actionType from '../actions/actionTypes'

const initialState ={
    token:null,
    userId:null,
    error:null,
    loading:false,
    status:false
}

const reducer =(state=initialState, action) =>{
    switch (action.type) {
        case actionType.AUTH_START:
            console.log('Auth Start')
            return{
                
            }

        case actionType.AUTH_FAIL:
                return{
                    ...state,
                    error:action.error
                }

        case actionType.AUTH_SUCCESS:
                    return{
                        ...state,
                        token:action.payload
                    }
         case actionType.AUTH_OUT:
                    return{
                        ...state,
                        token:null,
                        userId:null,
                        status:true
                    }  
        default:
            return state;
    }
}

export default reducer