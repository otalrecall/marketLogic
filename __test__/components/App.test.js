import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/components/App'

describe('components', () => {
    describe('App', () => {
        it('should render the App', () => {
            const enzymeWrapper = shallow(<App />)
            const divs = enzymeWrapper.find('div')

            expect(divs).toHaveLength(6)
            expect(divs.at(5).hasClass('col-md-offset-3 col-md-6 col-xs-12')).toBe(true)
            expect(divs.at(4).hasClass('container')).toBe(true)
            expect(divs.at(3).hasClass('col-md-offset-3 col-md-6 col-xs-12')).toBe(true)
            expect(divs.at(2).hasClass('container')).toBe(true)
            expect(enzymeWrapper.find('Header').props().text).toBe('Inventory Manager')
        })
    })
})