import {all,call} from "redux-saga/effects"
import movieSaga from "./Movies/Saga"

function* rootSaga(){
    yield all([call(movieSaga)])
}