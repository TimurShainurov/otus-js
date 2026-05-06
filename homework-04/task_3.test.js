import { createAge, createAdmin, getAdminProps } from "./script";

describe('Get properties of object', () => {

    const createAgeRes = createAge(30);
        const createAdminRes = createAdmin(createAgeRes)
        const getAdminPropsRes = getAdminProps(createAdminRes)

    it('returns array with values', () => {

        expect(getAdminPropsRes).toEqual(
            expect.arrayContaining(['John', 30, 'admin'])
        )
    })

    it('has 3 elems', () => {
        expect(getAdminPropsRes.length).toBe(3)
    })
})