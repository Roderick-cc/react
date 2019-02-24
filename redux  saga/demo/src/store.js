import { createStore, applyMiddleware } from 'redux';
import incrementReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	incrementReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchIncrementAsync)
export default store;
