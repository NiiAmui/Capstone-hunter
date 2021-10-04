import { Types } from '../actions/individual/Types'
let initialState = {
    dataInfo: {}
};

const individualReducer=(state=initialState,action)=>{
    switch (action.type) {
        case Types.VERIFY_INDIVIDUAL:
            return {
                ...state, 
                dataInfo: action.payload
            }
        default:
          return  state;
    }
}

export default individualReducer;  