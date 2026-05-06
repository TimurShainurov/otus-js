export const user = {
    name: 'John'
}
export function createAge(number) {
    user.age = number;
    return user
}

export function createAdmin(userWithAge) {
    const copy = Object.assign({ role: 'admin' }, userWithAge)
    return copy
}

export function getAdminProps(admin) {
    let { name, age, role } = admin
    return [name, age, role]
}

