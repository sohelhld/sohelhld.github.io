import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";




import { ScrollReducer } from "./scrollReducer/Reducer";

const rootReducer = combineReducers({

    ScrollReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
