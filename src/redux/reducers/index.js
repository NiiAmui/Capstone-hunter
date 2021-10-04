import { combineReducers } from "redux";
import isLoginReducer from "./isLoginReducer";
import hunterReducer from "./hunterReducer";
// import individual from "../../components/individual";
import individualReducer from "./individualReducer";


const appReducer  = combineReducers({
        authReducer : isLoginReducer,
        domain : hunterReducer,
        individual: individualReducer
    })

    const rootReducer = (state, action) => {
        // when a logout action is dispatched it will reset redux state
        if (action.type === 'LOGOUT') {
          state = undefined;
        }
      
        return appReducer(state, action);
      };
      
export default rootReducer;  