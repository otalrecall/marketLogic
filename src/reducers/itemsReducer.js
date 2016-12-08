import data from "../data"

const item = (state = {}, action) => {
	switch(action.type) {
		case "INCREASE_ITEMS":
			if (state.checked || state.name === action.name) {
				return Object.assign({}, state, {
					amount: state.amount + 1
				})
			}
			return state
		case "DECREASE_ITEMS":
			if (state.checked || state.name === action.name) {
				const decreasedItem = Object.assign({}, state, {
					amount: state.amount -1
				})
				// Set to null the items to delete
				if (decreasedItem.amount <= 0) {
					return null
				}
				return decreasedItem
			}
			return state
		case 'TOGGLE_CHECKED':
			if (state.id !== action.itemId) {
				return state
			}

			return Object.assign({}, state, {
				checked: !state.checked
			})
		default:
			return state
	}
}

const items = (state = data, action) => {
	switch(action.type) {
		case "INCREASE_ITEMS":
		    let increasedItems = state.map(i => 
		    	item(i, action)
		    )
		    // If there is item in the control panel and it's not already in the list, add it
		    if (action.name && !increasedItems.find(i => i.name === action.name)) {
		    	const newItem = {
		    		id: Date.now()%100,
		    		name: action.name,
		    		amount: 1,
		    		checked: false
		    	}
		    	increasedItems.push(newItem)
		    }
		    return increasedItems
		case "DECREASE_ITEMS":
		    let decreasedItems = state.map(i => 
		    	item(i, action)
		    )
		    // Delete from array the null items
		    for (let i = decreasedItems.length - 1; i >= 0; i--) {
		    	if (decreasedItems[i] === null) {
		    		decreasedItems.splice(i, 1)
		    	}
		    }
			return decreasedItems
		case 'TOGGLE_CHECKED':
		    return state.map(i => 
		    	item(i, action)
		    )
		default:
			return state
	}
}

export default items