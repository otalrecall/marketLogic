import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../src/components/Button'

function setup() {
    const props = {
        text: " + ",
        onClick: jest.fn()
    }

    const enzymeWrapper = shallow(<Button {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Button', () => {
        const { enzymeWrapper, props } = setup()
        const button = enzymeWrapper.find('button')

        it('should render the button', () => {
            expect(button.hasClass('btn btn-default')).toBe(true)
            expect(button.text()).toBe(props.text)
        })
        it('should call onClick', () => {
            button.props().onClick()

            expect(props.onClick.mock.calls.length).toBe(1)
        })
    })
})