import * as actions from '../actions'

const initialState ={
    services :[]
}


const reducer = (state = initialState,action) =>{

    switch(action.type){
        case actions.saveServices:
            return{
                ...state,
                services:state.services.concat({title:action.servicesData.title,
                                                    description:action.servicesData.description,
                                                        icon:action.servicesData.icon})
            }

        default:
            return state
    }

}

export default reducer