import Axios from "axios"

export const BaseURL = 'https:social-network.samuraijs.com/api/1.0/'

export enum BasicResultCodeEnum  {
    Success = 0,
    Failed = 1
}
type BasicResultCodeEnumType = typeof BasicResultCodeEnum
export const CaptchaEnum  = Object.freeze({
    CaptchaRC: 10
})
type CaptchaEnumType = typeof CaptchaEnum
export const bu_wc_h = Axios.create({
    baseURL: BaseURL,
    withCredentials: true,
    headers: {
        'API-KEY': 'fa27d1b2-0d5c-41e1-8165-6f8e31138afd'
    }
})


export const bu_wc = Axios.create({
    baseURL: BaseURL,
    withCredentials: true
})

export type ApiCommonResultType<D> = {
    messages: Array<string>
    data : D
    resultCode : number
}
