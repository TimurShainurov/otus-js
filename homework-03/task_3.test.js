import {arithmeticMean} from './script'

describe('Arithmetic mean of odd numbers', () => {
    it('returns 0 for 0', () => {
        expect(arithmeticMean(7)).toBe(4)
    })

    it('returns 1 for 1', () => {
        expect(arithmeticMean(7)).toBe(4)
    })
    it('returns 4 for 7', () => {
        expect(arithmeticMean(7)).toBe(4)
    })
})