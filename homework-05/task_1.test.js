import { sumOfArray } from './script'

describe('Sum of array elements', () => {
    it('returns correct sum', () => {
        expect(sumOfArray([1, 2, 3])).toBe(6)
    })

    it('works with negative numbers', () => {
        expect(sumOfArray([-1, -2, 3])).toBe(0)
    })

    it('works with zeros', () => {
        expect(sumOfArray([0, 0, 3])).toBe(3)
    })
})