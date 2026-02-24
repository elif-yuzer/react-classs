import { combineReducers, legacy_createStore as createStore } from "redux"
import todoReducer from '../redux/reducers/todoReducer'
import counterReducer from '../redux/reducers/counterReducer'
/* bu isimle cagırımak ıstıyorum dedım */

/* butun reducerlar cagırlır */

const topluReducer=combineReducers({
    counterReducer:counterReducer,
    todoReducer:todoReducer
})






/* toplanan reducerslerı store ısmıyle dısarıda kullaılmak ıcın create store ıcıne yazdık */
export const store=createStore(topluReducer)