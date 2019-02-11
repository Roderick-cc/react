//component
import React, {
	Component
} from 'react';



class Products extends Component {
	render() {
		const {
			products,
			addToCart
		} = this.props
		return (
			<div >
			<h2>Products</h2>
			<ul>
				{
					products.map(item =>(
						<li key={item.id}>
						<span>{item.title}  - {item.price} * {item.inventory}</span>
						<br/>
						<button 
						disabled={!item.inventory}
						onClick={() => addToCart(item)}>

							{ item.inventory ? 'add to cart ':'sold out'}
						</button>
						</li>
					))
				}
			</ul>
			</div>
		)
	}


	componentDidMount() {
		setTimeout(() => {
			this.props.getAllProducts()
		}, 1000)
	}

}


export default Products