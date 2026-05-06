import { minAndMaxElem } from './script'

describe('finds min and max elements of array', () => {

    it('returns an array [min, max]', () => {
        expect(minAndMaxElem([1, 100, -14])).toEqual([-14, 100])
    })

    it('length of array = 2', () => {
        expect(minAndMaxElem([1, 100, -14]).length).toBe(2)
    })

    it('works with array with 1 elem', () => {
        expect(minAndMaxElem([5])).toEqual([5, 5])
    })

    it('handles negative elems', () => {
        expect(minAndMaxElem([-11, -59, -1])).toEqual([-59, -1])
    })

})