const countVeg = require('../katas/veg-counter');

describe('countVeg', () => {
    test('return 0 for quantity when veg is not found', () => {
        expect(countVeg([])).toBe(0);
    })
    test('return quantity when one veg is found' , () => {
        const veg = [
            {name: 'Broccoli', type: 'brassica', quantity: 1}
        ]
        const vegType = 'brassica';
        const actual = countVeg(veg, vegType);
        const expected = 1;
        expect(actual).toBe(expected);
    })
    test('return quantity when multiple veg is found', () => {
        const veg = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ];
        const vegType = 'root';
        const actual = countVeg(veg,vegType);
        const expected = 9;
        expect(actual).toBe(expected);

    })
})