import * as actions from '../actions'

const initialState = {
    info : []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actions.saveInfo:
           
           
          return{
              ...state,
              info:state.info.concat({name:action.payload.name,
                                      email:action.payload.email,
                                      address:action.payload.address,
                                      contact:action.payload.contact,
                                      website:action.payload.website,
                                        logo:action.payload.logo})
          }
            

        default:
            return state

           
    }

    

}


export default reducer