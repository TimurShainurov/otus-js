import { user, createAge } from './script'

describe('Creating a new property in object', () => {

    const result = createAge(25)

    it('has all props of initial object', () => {
        expect(result).toMatchObject(user)
    })

    it('creates 1 new property "age" with definite value', () => {
        expect(result).toHaveProperty('age', 25)
    })

})