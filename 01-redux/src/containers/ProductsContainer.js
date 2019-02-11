import {
	connect
} from 'react-redux'
import Products from '../components/Products.js'
import {
	getAllProducts,
	addToCart
} from '../action/'

function mapStateToprops(state) {
	return {
		products: state.products.all
	}

}



// function mapDispatchToProps(dispath) {
// 	return {
// 		getAllProducts() {
// 			dispath(getAllProducts())

// 			//发起请求
// 			//拿到数据，调用dispath
// 			// dispath({
// 			// 	type: 'RECIVE_PRODUCTS',
// 			// 	products: ['a', 'x', 'b']
// 			// })


// 		}

// 	}
// }


const mapDispatchToProps = {
	getAllProducts,
	addToCart
}



const ProductsContainer = connect(
	mapStateToprops,
	mapDispatchToProps
)(Products)


export default ProductsContainer