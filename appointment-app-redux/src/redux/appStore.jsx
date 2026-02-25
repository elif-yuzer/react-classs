import { combineReducers, legacy_createStore as createStore } from "redux";
import {appReducer} from './appReducer'

const myReducers=combineReducers({
    appReducer:appReducer
})

export const appStore=createStore(myReducers)