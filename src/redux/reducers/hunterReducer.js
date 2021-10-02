import { Types } from '../actions/domain/Types'
let initialState = {
    domainInfo: {}
};

const hunterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case Types.VERIFY_DOMAIN:
            return {
                ...state, 
                domainInfo: action.payload
            }
        default:
          return  state;
    }
}

export default hunterReducer;   