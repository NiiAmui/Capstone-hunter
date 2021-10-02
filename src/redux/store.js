import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]
const initialState = {}
export const Store = createStore(
    rootReducer, initialState, composeWithDevTools(
        applyMiddleware(...middleware)
    )
)


window.store = Store