export const increaseItems = (name) => {
	return {
		type: "INCREASE_ITEMS",
		name
	}
}

export const decreaseItems = (name) => {
	return {
		type: "DECREASE_ITEMS",
		name
	}
}

export const toggleChecked = (itemId) => {
	return {
		type: 'TOGGLE_CHECKED',
		itemId
	}
}