//component
import React, {
	Component
} from 'react';



class Cart extends Component {
	render() {
		const {
			cartProducts,
			totalPrice,
			checkout
		} = this.props
		return (
			<div>
				<h2>Cart</h2>
				<ul>
				{
					cartProducts.map(item => (
						<li key={item.id}>
							{item.title} - {item.price} * {item.quantity} 
						</li>
					))
				}
				</ul>
				{!cartProducts.length && <p>Please add some produces to cart.</p>}
				<p>Total:{totalPrice}</p>
				<button
				onClick={() => checkout(cartProducts)}
				>Checkout</button>
			</div>
		)
	}
}


export default Cart