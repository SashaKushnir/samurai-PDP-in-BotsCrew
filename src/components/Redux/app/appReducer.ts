import { toAuthorise } from "../authorisation/authInfoReducer"
import { appActions, SET_INITIALIZED } from "./appActions";


type InitialStateType = {
    isInitialized : boolean
}

let initialStateM : InitialStateType = {
    isInitialized : false
}

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type GetActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

const appInfoReducer = (appInfo = initialStateM, action : GetActionsTypes<typeof appActions>) : InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: 
            return {
                ...appInfo,
                isInitialized : true
            }
        default:
            return appInfo
    }
}


export const initialization = () => (dispatch : any) =>  {    
    let authorisePromise = dispatch(toAuthorise())
    Promise.all([authorisePromise])
    .then(() => {
        dispatch(appActions.setInitialized())
    })
}

export default appInfoReducer



