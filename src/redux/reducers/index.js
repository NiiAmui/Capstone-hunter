import { combineReducers } from "redux";
import isLoginReducer from "./isLoginReducer";
import hunterReducer from "./hunterReducer";


const appReducer  = combineReducers({
        authReducer : isLoginReducer,
        domain : hunterReducer
    })

    const rootReducer = (state, action) => {
        // when a logout action is dispatched it will reset redux state
        if (action.type === 'LOGOUT') {
          state = undefined;
        }
      
        return appReducer(state, action);
      };
      
export default rootReducer;  