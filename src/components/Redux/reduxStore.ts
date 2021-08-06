import {applyMiddleware, combineReducers, createStore, compose} from "redux"
import authInfoReducer from "./authorisation/authInfoReducer"
import dialogsInfoReducer from "./dialogs/dialogsInfoReducer"
import profileInfoReducer from "./profile/profileInfoReducer"
import usersInfoReducer from "./users/usersReducer"
import appInfoReducer from './app/appReducer'
import thunkMW from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducersList = combineReducers({
    profileInfo : profileInfoReducer,
    dialogsInfo : dialogsInfoReducer,
    usersInfo : usersInfoReducer,
    authInfo : authInfoReducer,
    form : formReducer,
    appInfo : appInfoReducer
}) 
export type RootState = ReturnType<typeof reducersList>

const composeEnhancers =
  typeof window === 'object' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  // @ts-ignore   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMW)
);
let store = createStore(reducersList, enhancer)

export default store