import { takeEvery, put, call } from "redux-saga/effects";
import { FIND_MOVIES } from "../Constants";
import { actionSearchMovie } from "./Actions";
import { fetchMovies } from "../REST";

export default function* watcherCart(){
    yield takeEvery(FIND_MOVIES,workerCart)
}

function* workerCart(action) {
    try{
        const data = yield call(fetchMovies, action.payload);
        yield put(actionSearchMovie(data.Search));
    }
    catch(err) {
        console.error("ERROR", err)
    }
}