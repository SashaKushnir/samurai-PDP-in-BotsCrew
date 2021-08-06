import { DataType } from "./authInfoReducer";

export const SET_AUTHORISATION = 'SET_AUTHORISATION'
export const TO_FETCH = 'TO_FETCH'
export const STOP_FETCHING = 'STOP_FETCHING'
export const SET_CAPTCHA = 'SET_CAPTCHA'

export const SET_INITIALIZED = 'SET_INITIALIZED'

export const authorisationActions = {
    settingAuthorisation : (mydata : DataType, isAuthorised : boolean) =>
        ({ type: SET_AUTHORISATION, mydata, isAuthorised}) as const,
    toFetch:  () => ({ type: TO_FETCH }) as const,
    stopFetching: () => ({ type: STOP_FETCHING }) as const,
    setCaptcha: (captchaUrl: string) => ({type : SET_CAPTCHA , captchaUrl}) as const


}