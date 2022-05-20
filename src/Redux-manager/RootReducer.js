import {combineReducers} from "redux";
import movieReducer from "./Movies/Reducer";

const rootReducer = combineReducers({movieReducer});

export default rootReducer;