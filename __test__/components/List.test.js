import React from 'react'
import { shallow } from 'enzyme'
import List from '../../src/components/List'

function setup() {
    const props = {
        list: [ { id: 1, name: "Chairs", amount: 5, checked: false } ],
        onItemClick: jest.fn()
    }

    const enzymeWrapper = shallow(<List {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('List', () => {
        const { enzymeWrapper, props } = setup()
        const listItemProps = props.list[0]
        const listItem = enzymeWrapper.find('ListItem')

        it('should render the list', () => {
            expect(enzymeWrapper.find('ul').hasClass('list-group')).toBe(true)
            expect(listItem.key()).toBe( listItemProps.id.toString() )
            expect(listItem.props().name).toBe( listItemProps.name )
            expect(listItem.props().amount).toBe( listItemProps.amount )
            expect(listItem.props().checked).toBe( listItemProps.checked )
        })
        it('should call onItemClick', () => {
            listItem.props().onClick( listItemProps.id )

            expect(props.onItemClick.mock.calls.length).toBe(1)
        })
    })
})