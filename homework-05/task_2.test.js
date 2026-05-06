import { doubleNums } from './script'

describe('Doubles numbers of array', () => {

    const nums = [1,2,3,4]

    it('returns array with double elements', () => {
        expect(doubleNums(nums)).toEqual([2,4,6,8])
    })

    it('works with empty array', () => {
        expect(doubleNums([])).toEqual([])
    })

    it('does not change initial array', () => {
        doubleNums(nums)
        expect(nums).toEqual([1,2,3,4])
    })

    it('length of doubled and initial are equal', () => {
        const result = doubleNums(nums)
        expect(nums.length).toBe(result.length)
    })
})