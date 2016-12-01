export default function reducer(state={
	items: [ {id: 1, name: "Sillas", amount: 5}, {id: 2, name: "mesas", amount: 2}]
}, action) {
	switch(action.type) {
		case "INCREASE_ITEMS": {
			const newItems = [...state.items]
			const { itemIds } = action.payload
			for (itemId in itemIds) {
				const itemToIncrese = newTweets.findIndex(item => item.id === itemId)
				++itemToIncrease.amount
			}
			return {...state, items: newItems}
		}
		case "DECREASE_ITEMS": {
			let newItems = [...state.items]
			const { itemIds } = action.payload
			for (itemId in itemIds) {
				const itemToDecrease = newTweets.findIndex(item => item.id === itemId)
				--itemToDecrease.amount
				if (itemToIncrease <= 0) {
					newItems = newItems.filter(item => item.id !== itemToDecrease.id)
				}
			}
			return {...state, items: newItems}
		}
		case "ADD_ITEM": {
			return {
				...state, 
				items: [...state.items, action.payload]
			}
		}
	}
	return state
}