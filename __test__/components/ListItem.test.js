import React from 'react'
import { shallow } from 'enzyme'
import ListItem from '../../src/components/ListItem'

function setup() {
    const props = {
        onClick: jest.fn(),
        name: "Chairs",
        amount: 5,
        checked: false
    }

    const enzymeWrapper = shallow(<ListItem {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('ListItem', () => {
        const { enzymeWrapper, props } = setup()

        it('should render a list item', () => {
            const spans = enzymeWrapper.find('span')

            expect(enzymeWrapper.find('li').hasClass('list-group-item')).toBe(true)
            expect(spans).toHaveLength(2)
            expect(spans.first().text()).toBe(props.amount.toString())
            expect(spans.last().text()).toBe(props.name)
            expect(enzymeWrapper.find('input').props().checked).toBe(props.checked)

        })
        it('should call on click list item', () => {
            enzymeWrapper.find('li').props().onClick()
            
            expect(props.onClick.mock.calls.length).toBe(1)
        })
    })
})