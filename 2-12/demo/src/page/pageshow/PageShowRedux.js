//reducer

var pageinit={
	list:[],
	allpage:0,
	currentpage:1,
	nextpage:false
};

function PageShowRedux(state = pageinit, action) {
	switch (action.type) {
		case "GET_LIST":
			//返回当前对应页数的信息
			return Object.assign({},state,{
						list:action.list,
						allpage:action.allpage,
						currentpage:action.currentpage,
						nextpage:action.nextpage
					})
		default:
		  	return state
	}
}


export default PageShowRedux