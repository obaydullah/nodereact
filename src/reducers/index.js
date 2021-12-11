import { combineReducers } from "redux";
import phoneReducer from "./reducers";

const rootReducers = combineReducers({
    phone: phoneReducer
})

export default rootReducers;