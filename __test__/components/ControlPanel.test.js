import React from 'react'
import { shallow } from 'enzyme'
import ControlPanel from '../../src/components/ControlPanel'

function setup() {
    const props = {
        textIncreaseButton: " + ",
        textDecreaseButton: " - ",
        onIncreaseButtonClick: jest.fn(),
        onDecreaseButtonClick: jest.fn()
    }

    const enzymeWrapper = shallow(<ControlPanel {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('ControlPanel', () => {
        it('should render the control panel', () => {
            const { enzymeWrapper, props } = setup()
            const buttons = enzymeWrapper.find('Button')
            const spans = enzymeWrapper.find('span')

            expect(enzymeWrapper.find('form').hasClass('input-group')).toBe(true)
            expect(enzymeWrapper.find('input').hasClass('form-control')).toBe(true)
            expect(buttons).toHaveLength(2)
            expect(spans).toHaveLength(2)

            spans.forEach( node => {
                expect(node.hasClass('input-group-btn')).toBe(true)
            })

            expect(buttons.first().props().text).toEqual(props.textDecreaseButton)
            expect(buttons.last().props().text).toEqual(props.textIncreaseButton)
        })
        it('should call onIncreaseButtonClick', () => {
            const { enzymeWrapper, props } = setup()
            const buttons = enzymeWrapper.find('Button')
        })
    })
})