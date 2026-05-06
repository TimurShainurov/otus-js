import {createAge, createAdmin } from "./script";

describe('clone object and add new property', () => {

    const createAgeRes = createAge(30)
    const createAdminRes = createAdmin(createAgeRes)

    it('has all props of object with age', () => {
        expect(createAdminRes).toMatchObject(createAgeRes)
    })

    it('adds new prop "role" with difinite value', () => {
        expect(createAdminRes).toHaveProperty('role', 'admin')
    })

    it('does not change cloned object', () => {
        createAdmin(createAgeRes);
        expect(createAgeRes).toEqual({name:'John', age: 30} )
    })
})