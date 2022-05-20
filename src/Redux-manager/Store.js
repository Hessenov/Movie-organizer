import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./RootReducer"
import rootSaga from "./RootSaga"

const createSagaMiddleware =createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(createSagaMiddleware));

createSagaMiddleware.run(rootSaga);

export default store;