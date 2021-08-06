import { stopSubmit } from "redux-form"
import { profile } from "../../../api/profile";
import { BasicResultCodeEnum } from "../../../api/api";
import { ADD_POST_M, profileActions, SET_STATUS, SETTING_NEW_PROFILE_DATA, UPDATING_PHOTO } from "./profileActions";
import { GetActionsTypes } from "../app/appReducer";


let _idPostMCount: number
export type PostsObjectsType = {
    id: number | null
    message: string
    likesAm: number
}
export type ContactsType = {
    github?: string | null
    vk?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    website?: string | null
    youtube?: string | null
    mainLink?: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileByUserIdType = {
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    aboutMe: string | null
    contacts: ContactsType | null
    photos: PhotosType | null
}
type InitialStateType = {
    postsObjects: Array<PostsObjectsType>
    profileByUserId: ProfileByUserIdType
    status: string
}

let profilePage: InitialStateType = {
    postsObjects: [
        {id: 1, message: "Hello!!!", likesAm: 25},
        {id: 2, message: "Hello!!!", likesAm: 2},
        {id: 3, message: "Hello!!!", likesAm: 25}
    ],
    profileByUserId: {
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        aboutMe: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null
        }
    },
    status: ''
}
const profileInfoReducer = (profileInfo = profilePage, action: GetActionsTypes<typeof profileActions>) => {
    switch (action.type) {
        case ADD_POST_M:
            _idPostMCount = profileInfo.postsObjects.length + 1
            return {
                ...profileInfo,
                postsObjects: [...profileInfo.postsObjects,
                    {
                        id: _idPostMCount,
                        message: action.post,
                        likesAm: 25
                    }
                ]
            }

        case SET_STATUS :

            return {
                ...profileInfo,
                status: action.status
            }
        case UPDATING_PHOTO:
            return {
                ...profileInfo,
                profileByUserId: {
                    ...profileInfo.profileByUserId,
                    photos: {...action.photoObj}
                }
            }

        case SETTING_NEW_PROFILE_DATA :
            return {
                ...profileInfo,
                profileByUserId: {
                    ...action.newObjData,
                    contacts: {...action.newObjData.contacts},
                    photos: action.newObjData.photos || profileInfo.profileByUserId.photos
                },
            }

        default:
            return profileInfo
    }
}

export const friendsIn = (userId: number | null) => async (dispatch: any) => {
    const data = await profile.setFriendsProfile(userId)
    dispatch(profileActions.setNewProfileData(data))
}
export const setProfileStatus = (userId: number | null) => async (dispatch: any) => {
    const response = await profile.profileStatusUserIdGET(userId)

    dispatch(profileActions.setStatus(response.data))
}
export const updateProfileStatus = (status: string) => async (dispatch: any) => {
    const response = await profile.profileStatusPUT(status)

    if (response.data.resultCode === BasicResultCodeEnum.Success)
        dispatch(profileActions.setStatus(status))
}
export const savePhoto = (fileName: File) => async (dispatch: any) => {
    const response = await profile.profilePhotoUpdatePut(fileName)
    if (response.data.resultCode === BasicResultCodeEnum.Success)
        dispatch(profileActions.updatingPhoto(response.data.data.photos))
    else
        console.warn(response.data.messages)
}
export const updateProfileData = (newObjData: ProfileByUserIdType) => async (dispatch: any) => {
    let response = await profile.profileUpdatePut(newObjData)
    if (response.data.resultCode === 0)
        dispatch(profileActions.setNewProfileData(newObjData))
    else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}
export default profileInfoReducer

 
      
