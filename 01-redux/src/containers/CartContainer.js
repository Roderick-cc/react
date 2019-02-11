import {
	connect
} from 'react-redux'
import Cart from '../components/Cart.js'
import {
	checkout
} from '../action/'


const getCartProducts = state => {

	return (
		state.cart.items.map(cartItem => {
			const pord = state.products.all.find(prodItem => prodItem.id === cartItem.id)
			return {
				id: pord.id,
				title: pord.title,
				price: pord.price,
				quantity: cartItem.quantity
			}
		}))
}

const getTotalPrice = (state) => {
	return getCartProducts(state).reduce((total, pord) => {
		return total + pord.price * pord.quantity
	}, 0)
}

function mapStateToprops(state) {
	return {
		cartProducts: getCartProducts(state),
		totalPrice: getTotalPrice(state),


	}
}



/*function mapDispatchToProps(dispath) {
	return {
	}
}
*/

const mapDispatchToProps = {
	checkout
}



const CartContainer = connect(
	mapStateToprops,
	mapDispatchToProps
)(Cart)

export default CartContainer