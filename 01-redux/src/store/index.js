import {
	combineReducers,
	createStore,
	applyMiddleware,
	compose
} from 'redux'

import products from '../reducers/products.js'
import cart from '../reducers/cart.js'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
	products,
	cart,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk)
	)


)

export default store