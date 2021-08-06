import { PhotosType, ProfileByUserIdType } from "./profileInfoReducer";

export const ADD_POST_M = 'ADD_POST_M'
export const SET_STATUS = 'SET_STATUS'
export const UPDATING_PHOTO = 'UPDATING_PHOTO'
export const SETTING_NEW_PROFILE_DATA = 'SETTING_NEW_PROFILE_DATA'

export const profileActions = {
    addPost: (post : string)  => ({ type: ADD_POST_M, post}) as const,
    setStatus: (status : string) => ({type : SET_STATUS, status}) as const,
    updatingPhoto: (photoObj : PhotosType) => ({type : UPDATING_PHOTO, photoObj}) as const,
    setNewProfileData: (newObjData : ProfileByUserIdType) =>
        ({type : SETTING_NEW_PROFILE_DATA, newObjData}) as const
}