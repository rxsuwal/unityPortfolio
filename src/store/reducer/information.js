import * as actions from '../actions'

const initialState = {
    info : []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actions.saveInfo:
           
          return{
              ...state,
              info:state.info.concat({name:action.infoDATA.name,
                                      email:action.infoDATA.email,
                                      address:action.infoDATA.address,
                                      contact:action.infoDATA.contact,
                                      website:action.infoDATA.website,
                                        logo:action.infoDATA.logo})
          }
            

        default:
            return state

           
    }

    

}


export default reducer