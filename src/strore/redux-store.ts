import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import dashboardReducer from './dashboard/dashboard-reducer'
import authReducer from './auth/auth-reducer'
const rootReducer = combineReducers({
  form: formReducer,
  dashboardPage: dashboardReducer,
  auth: authReducer,
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InfrerActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)
// @ts-ignore
window.store = store

// @ts-ignore
export default store
