//Profile
import {RootState} from "../reduxStore";

export const getPostsObjectsSel = (state: RootState) => state.profileInfo.postsObjects
export const getProfileByUserIdSel = (state: RootState) => state.profileInfo.profileByUserId
export const getStatusSel = (state: RootState) => state.profileInfo.status


//Auth
export const getDefAuthorisedUserIdSel = (state: RootState)=> state.authInfo.data.id
export const getIsAuthFetchingSel = (state: RootState) =>    state.authInfo.isFetching
export const getAuthDataSel = (state: RootState) =>    state.authInfo.data
export const getIsAuthSel = (state: RootState) => state.authInfo.isAuthorised

//User
export const getUserListSel = (state: RootState) => state.usersInfo.UserList
export const getCurrentUserPageSel = (state: RootState) => state.usersInfo.currentUserPage
export const getTotalUserPagesSel = (state: RootState) => state.usersInfo.totalUserPages
export const getPageNumbersSel = (state: RootState) => state.usersInfo.pageNumber
export const getTotalUserItemsSel = (state: RootState) => state.usersInfo.totalUserItems
export const getIsUserFetchingSel = (state: RootState) => state.usersInfo.isFetching
export const getButtonIsEnableSel = (state: RootState) =>  state.usersInfo.buttonIsEnable

//App
export const getIsInitializedSel = (state: RootState) =>    state.appInfo.isInitialized

//Dialogs
export const getD_MessagesInfoSel = (state: RootState) => state.dialogsInfo.d_MessagesInfo
export const getD_FriendsInfoSel = (state: RootState) => state.dialogsInfo.d_FriendsInfo


