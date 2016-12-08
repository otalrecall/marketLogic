import * as actions from '../../src/actions/ItemsActions'

describe('actions', () => {
 	it('should create an action to increase items', () => {
	    const name = 'Chairs'
	    const expectedAction = {
	      type: 'INCREASE_ITEMS',
	      name
	    }
	    expect(actions.increaseItems(name)).toEqual(expectedAction)
  	})
 	it('should create an action to decrease items', () => {
	    const name = 'Chairs'
	    const expectedAction = {
	      type: 'DECREASE_ITEMS',
	      name
	    }
	    expect(actions.decreaseItems(name)).toEqual(expectedAction)
  	})
 	it('should create an action to toggle an item', () => {
	    const itemId = 1
	    const expectedAction = {
	      type: 'TOGGLE_CHECKED',
	      itemId
	    }
	    expect(actions.toggleChecked(itemId)).toEqual(expectedAction)
  	})
})