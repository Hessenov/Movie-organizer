import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./RootReducer"
import rootSaga from "./RootSaga"

const SagaMiddleware =createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;