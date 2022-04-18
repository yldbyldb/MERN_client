// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload
		case 'CREATE':
			return [...posts, action.payload]
		case 'UPDATE':
			return posts.map(post => post._id === action.payload._id ? action.payload : post) //由于这里数组的中的元素是引用数据类型，不是基本数据类型，所以会改变元素
		default:
			return posts
	}
}