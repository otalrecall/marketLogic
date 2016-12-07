import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../src/components/Header'

function setup() {
    const props = {
        text: "Address Book"
    }

    const enzymeWrapper = shallow(<Header {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Header', () => {
        it('should render the header of the webpage', () => {
            const { enzymeWrapper, props } = setup()

            expect(enzymeWrapper.find('div').hasClass('container-fluid')).toBe(true)
            expect(enzymeWrapper.find('h1').text()).toBe(props.text)
        })
    })
})