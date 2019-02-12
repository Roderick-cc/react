const _products = [{
		"id": 1,
		"title": "ipad 4 min",
		"price": 500.01,
		"inventory": 2
	}, {
		"id": 2,
		"title": "T-shit white",
		"price": 10.99,
		"inventory": 10
	}, {
		"id": 3,
		"title": "CD",
		"price": 19.99,
		"inventory": 5
	}



]



export const getAllProducts = callback => {
	setTimeout(function() {
		callback(_products)
	}, 100)
}


export const buyProducts = (porducts, callback, errorCallback) => {
	setTimeout(function() {
		Math.random() > 0.5 ? callback() : errorCallback()
	}, 100)
}