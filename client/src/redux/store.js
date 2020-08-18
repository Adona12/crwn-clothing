import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import {persistStore} from "redux-persist"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./root-reducer"
import RootSaga from "./root.saga";
const sagaMiddleWare=createSagaMiddleware();
const middlewares=[sagaMiddleWare];
if(process.env.NODE_ENV==="development"){
    middlewares.push(logger)
}
 export const store=createStore(rootReducer,applyMiddleware(...middlewares));
 sagaMiddleWare.run(RootSaga);
export const persistor=persistStore(store);
export default {store,persistor}
