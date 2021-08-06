import { stopSubmit } from "redux-form"
import {RootState} from "../reduxStore";
import { auth } from "../../../api/auth";
import { BasicResultCodeEnum, CaptchaEnum } from "../../../api/api";
import { authorisationActions, SET_AUTHORISATION, SET_CAPTCHA, STOP_FETCHING, TO_FETCH } from "./authorisationActions";
import { GetActionsTypes } from "../app/appReducer";


export type DataType = {
    id: number | null
    password: string | null,
    login:  string | null,
    rememberMe: boolean
}

type InitialStateType = typeof initialState


let initialState = {
    data: {
        id: null as number| null,
        password: null as string | null,
        login: null as string | null,
        rememberMe : false
    },
    isFetching: false,
    isAuthorised: false,
    captchaUrl : null as string | null
}
const logoutedInfo = {
    id: null,
    password: null,
    login: null,
    rememberMe : false      
}
const authInfoReducer = (authInfo:InitialStateType = initialState, action : GetActionsTypes<typeof authorisationActions>) : InitialStateType => {

    switch (action.type) {
        case SET_AUTHORISATION: {
            return {
                ...authInfo,
             data: { id: action.mydata.id,
                login: action.mydata.login,
                password: action.mydata.password,
                 rememberMe : action.mydata.rememberMe
            },
            isAuthorised: action.isAuthorised
            }
        }
        case SET_CAPTCHA : {
            return {
                ...authInfo,
                captchaUrl: action.captchaUrl
            }
        }
        case TO_FETCH :
            return {
                ...authInfo,
                isFetching : true
            }

        case STOP_FETCHING :
            return {
                ...authInfo,
                isFetching : false
            }

        default:
            return authInfo
    }
}

type SettingAuthorisationType = {
    type : typeof SET_AUTHORISATION
    mydata : DataType
    isAuthorised : boolean
}



export const toAuthorise = () => async(dispatch : any) => {
    const data = await auth.getAuthorisedData()      
        dispatch(authorisationActions.toFetch())
        if (!data.resultCode) {
            dispatch(authorisationActions.settingAuthorisation(data.data, true))
        }
        dispatch(authorisationActions.stopFetching())
}
type InValType = {
    captcha : string | null
    password : string
    email : string
    rememberMe : boolean
}
export const  toLogIn = (val : InValType) => async(dispatch : any) => {
    const response = await auth.logIn(val)
        if(response.resultCode === BasicResultCodeEnum.Success){
            dispatch(toAuthorise())
        }
        else {
            if(response.resultCode === CaptchaEnum.CaptchaRC){
                dispatch(setCaptchaUrlTK())
            }
            let error = response.messages.length > 0 ? response.messages[0] : 'Uncaught error'
            dispatch(stopSubmit('login', {_error : error}))
        }
}
const setCaptchaUrlTK = () => async(dispatch : any) => {
    const response = await auth.getCaptchaUrl()
    console.log("Captcha response", response)
    dispatch(authorisationActions.setCaptcha(response.data.url))

}
export const toLogOut = () => async(dispatch : any) => {
    const response = await auth.logOut()
        if(!response.data.resultCode){
            dispatch(authorisationActions.settingAuthorisation(logoutedInfo, false))
        }
        else {
            console.warn('Failed!!!')
        }
}
export default authInfoReducer
