import reducer from '../../src/reducers/ItemsReducer'

describe('items reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([ 
            {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
            {id: 1480187767357, name: "Tables", amount: 5, checked: false}
        ])
    })

    it('should handle INCREASE_ITEMS', () => {
        expect(
            reducer([ 
                    {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
                    {id: 1480187767357, name: "Tables", amount: 5, checked: true},
                    {id: 1480187767358, name: "Trucks", amount: 1, checked: false}
                ],
                {
                    type: 'INCREASE_ITEMS',
                    name: 'Chairs'
                }
            )
        ).toEqual([ 
            {id: 1480187767356, name: "Chairs", amount: 4, checked: false}, 
            {id: 1480187767357, name: "Tables", amount: 6, checked: true},
            {id: 1480187767358, name: "Trucks", amount: 1, checked: false}
        ])

        // Adding new item to the list
        expect(
            reducer([ 
                    {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
                    {id: 1480187767357, name: "Tables", amount: 5, checked: true}
                ],
                {
                    type: 'INCREASE_ITEMS',
                    name: 'Trucks'
                }
            )
        ).toEqual([ 
            {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
            {id: 1480187767357, name: "Tables", amount: 6, checked: true},
            {id: parseInt(Date.now().toString().slice(0, -2)), name: "Trucks", amount: 1, checked: false}
        ])
    })

    it('should handle DECREASE_ITEMS', () => {
        expect(
            reducer([ 
                    {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
                    {id: 1480187767357, name: "Tables", amount: 5, checked: true},
                    {id: 1480187767358, name: "Trucks", amount: 1, checked: false}
                ],
                {
                    type: 'DECREASE_ITEMS',
                    name: 'Chairs'
                }
            )
        ).toEqual([ 
            {id: 1480187767356, name: "Chairs", amount: 2, checked: false}, 
            {id: 1480187767357, name: "Tables", amount: 4, checked: true},
            {id: 1480187767358, name: "Trucks", amount: 1, checked: false}
        ])

        // Removing an item to the list
        expect(
            reducer([ 
                    {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
                    {id: 1480187767357, name: "Tables", amount: 5, checked: true},
                    {id: 1480187767358, name: "Trucks", amount: 1, checked: true}
                ],
                {
                    type: 'DECREASE_ITEMS',
                    name: 'Trucks'
                }
            )
        ).toEqual([ 
            {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
            {id: 1480187767357, name: "Tables", amount: 4, checked: true}
        ])
    })

    it('should handle TOGGLE_CHECKED', () => {
        expect(
            reducer([ 
                    {id: 1480187767356, name: "Chairs", amount: 3, checked: false}, 
                    {id: 1480187767357, name: "Tables", amount: 5, checked: true}
                ],
                {
                    type: 'TOGGLE_CHECKED',
                    itemId: 1480187767356
                }
            )
        ).toEqual([ 
            {id: 1480187767356, name: "Chairs", amount: 3, checked: true}, 
            {id: 1480187767357, name: "Tables", amount: 5, checked: true}
        ])
    })
})