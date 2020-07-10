import { combineReducers, createStore, compose } from 'redux'
import userReducer from './reducers/userReducer'
import uiReducer from './reducers/uiReducer'

const reducers = combineReducers({
    user: userReducer,
    ui: uiReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers())

export default store