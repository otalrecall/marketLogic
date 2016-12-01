export function addItem(name) {
	return {
		type: "ADD_ITEM",
		payload: {
			id: Date.now(),
			name: name,
			amount: 1
		}
	}
}

export function deleteItem(id) {
	return {
		type: "DELETE_ITEM",
		payload: id
	}
}

export function increaseItems(itemIds) {
	return {
		type: "INCREASE_ITEMS",
		payload: itemIds
	}
}

export function decreaseItems(itemIds) {
	return {
		type: "DECREASE_ITEMS",
		payload: itemIds
	}
}