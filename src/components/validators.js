export const requiredCreator = (name) => (value) => {
    if (value) return undefined
    return `${name} should not be empty`
}