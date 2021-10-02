import { Types  } from "../actions/user/Types";

const initialState = {
    authUser : {}
}

const isLoginReducer = (state = initialState, action) =>{
    switch (action.type) {
        case Types.AUTHENTICATE:
            return {
                ...state, authUser: action.payload
            };    
             
        default:
            return state;
    }
}

export default isLoginReducer;   