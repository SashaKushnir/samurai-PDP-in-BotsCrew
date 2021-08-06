
export const requiredField = (value: string) => {
    if(value)
        return undefined
    return 'required field'
}

export const maxLengthCreator = (maxLength : number) => (value: string) => {
    if(value.length > maxLength)
    return `max length is ${maxLength}!!!`
    return undefined
}

export const minLengthCreator = (minLength: number) => (value: string) => {
    if(value.length <= minLength)
    return `min length is ${minLength}`
    return undefined
}