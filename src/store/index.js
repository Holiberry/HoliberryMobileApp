import ReduxThunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import authReducer from './reducers/auth'

const rootReducer = combineReducers({
  auth: authReducer,
})

export default createStore(rootReducer, applyMiddleware(ReduxThunk))