import * as shop from '../api/shop'
export const reciveProducts = products => ({
	type: 'RECIVE_PRODUCTS',
	products
})

export const addToCart = products => ({
	type: 'ADD_TO_CART',
	products
}) 


export const getAllProducts = () => dispath => {
	console.log(dispath)
	shop.getAllProducts(products => {
		console.log(dispath)
		dispath(reciveProducts(products))
	})
}



export const setCartItems = items => ({
	type: 'SET_ITEMS',
	items
})



export const checkout = (products) => dispath => {
	console.log('checkout', products)
	//1.备份购物车数据
	const savedCartProducts = [...products]
	//2.清空就算状态
	dispath(setCheckoutStatus(null))
	//3.清空购物车
	dispath(setCartItems([]))
	//4.执行结算操作
	shop.buyProducts(
		products,
		() => dispath(setCheckoutStatus('successful')),
		() => {
		dispath(setCheckoutStatus('failed'))
			dispath(setCartItems(savedCartProducts))
		}
	)
}

// 	成功 设置结算状态成功
//  失败 设置结算状态失败，还原购物车数据

export const setCheckoutStatus = status => ({
	type: 'SET_CHECKOUT_STATUS',
	status
})
