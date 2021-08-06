import { UserListType } from "./usersReducer";

export const setU = 'setU'
export const setTotalCount = 'setTotalCount'
export const changeCurrentPage = 'changeCurrentPage'
export const toFetch = 'toFetch'
export const stopFetch = 'stopFetch'
export const SET_FOLLOWED = 'SET_FOLLOWED'
export const SET_UNFOLLOWED = 'SET_UNFOLLOWED'
export const BUTTON_AVAILABLE = 'BUTTON_AVAILABLE'
export const SETTING_CURRENT_ARRAY_ELEMENT = 'SETTING_CURRENT_ARRAY_ELEMENT'
export const usersActions = {
    setUser: (array : Array<UserListType>) => ({ type: setU, array }) as const,
    setTotalCounter: (totalCount : number) => ({ type: setTotalCount, totalCount }) as const,
    changeCurrentPager: (newPageIndex : number) => ({ type: changeCurrentPage, newPageIndex }) as const,
    setCurrentArrayElement: (currAE : number) => ({ type: SETTING_CURRENT_ARRAY_ELEMENT, currAE }) as const,
    isFetchingA: () => ({ type: toFetch }) as const,
    stopFetching: () => ({ type: stopFetch }) as const,
    setFollowed: (findex : number) => ({ type: SET_FOLLOWED, findex }) as const,
    setUnfollowed: (unfindex : number) => ({ type: SET_UNFOLLOWED, unfindex }) as const,
    buttonIsAvaiable: (status : boolean, ID : number) => ({ type: BUTTON_AVAILABLE, status, ID }) as const
}