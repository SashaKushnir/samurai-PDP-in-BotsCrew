import axios from "axios";
import { ApiCommonResultType, BaseURL, bu_wc_h } from "./api";
import { FormDataType } from "../components/Login/Login";

export const auth = {
    getAuthorisedData: () => {
        return bu_wc_h.get<ApiCommonResultType<{
            password: string
            id: number
            login: string
            rememberMe : boolean
        }>>('auth/me').then(response => response.data)
    },
    logIn: (val: FormDataType) => {
        console.log("API_LOGIN", val)
        return bu_wc_h.post<ApiCommonResultType<{ userId: number }>>('auth/login', val).then(response => response.data)
    },
    logOut: () => {
        return bu_wc_h.delete('auth/login')
    },
    getCaptchaUrl: () => {
        return axios.get<{url: string}>(BaseURL + 'security/get-captcha-url')
    }
}