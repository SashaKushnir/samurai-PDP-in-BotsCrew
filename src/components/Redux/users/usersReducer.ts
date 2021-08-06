import { PhotosType } from '../profile/profileInfoReducer';
import { users } from "../../../api/users";
import { follow } from "../../../api/follow";
import { GetActionsTypes } from "../app/appReducer";
import {
   BUTTON_AVAILABLE,
   changeCurrentPage,
   SET_FOLLOWED,
   SET_UNFOLLOWED, SETTING_CURRENT_ARRAY_ELEMENT,
   setTotalCount,
   setU,
   stopFetch,
   toFetch,
   usersActions
} from "./usersActions";



export type UserListType = {
   id : number
   name : string
   status : string
   followed : boolean
   photos : PhotosType
}

type InitialUserType = {
   UserList: Array<UserListType>
   currentUserPage: number
   totalUserPages: number
   pageNumber: number
   totalUserItems: number
   isFetching: boolean
   buttonIsEnable: Array<number>
   currentArrayElement : number
}
let initialUser  = {
   UserList: [],
   currentUserPage: 1,
   totalUserPages: 0,
   pageNumber: 5,
   totalUserItems: 0,
   isFetching: false,
   buttonIsEnable: [],
   currentArrayElement : 1
}

const usersInfoReducer = (usersState: InitialUserType = initialUser, action : GetActionsTypes<typeof usersActions>) => {
   let usersStateCopy

   switch (action.type) {

      case setU:

         return {
            ...usersState,
            UserList: action.array
         }

      case setTotalCount:
         return {
            ...usersState,
            totalUserItems: action.totalCount
         }

      case changeCurrentPage:

         return {
            ...usersState,
            currentUserPage: action.newPageIndex
         }

      case toFetch:

         return {
            ...usersState,
            isFetching: true
         }

      case stopFetch:

         return {
            ...usersState,
            isFetching: false
         }

      case SET_FOLLOWED:
         return {
            ...usersState,
            UserList: usersState.UserList.map((obj: UserListType)=>{
               if(obj.id === action.findex)
                  obj.followed = true
               return obj
            })
         }
      case SET_UNFOLLOWED:
         return {
            ...usersState,
            UserList: usersState.UserList.map((obj: UserListType)=>{
               if(obj.id === action.unfindex)
                  obj.followed = false
               return obj
            })
         }
      case BUTTON_AVAILABLE:
         if (action.status) {
            return {
               ...usersState,
               buttonIsEnable: usersState.buttonIsEnable.filter((val : Number) => action.ID === val ? false : true)
            }
         } else
         return {
            ...usersState,
            buttonIsEnable: [...usersState.buttonIsEnable, action.ID]
         }
      

      case SETTING_CURRENT_ARRAY_ELEMENT : {

         return {
            ...usersState,
            currentArrayElement : action.currAE
         }
      }
      default:
         return usersState
   }


}

//window.u = initialUser
//                                                 Any type

export const getUsersTK =  (currentUserPage : number | null, pageNumber : number| null) => async(dispatch : any) => {
   dispatch(usersActions.isFetchingA())
   const data = await users.getUsers(currentUserPage, pageNumber)
   dispatch(usersActions.setTotalCounter(data.totalCount))
   dispatch(usersActions.setUser(data.items))
   dispatch(usersActions.stopFetching())
}
export const getUserByCursorTK = (index : number, pageNumber : number | null) => async(dispatch : any) => {
   dispatch(usersActions.isFetchingA())
   dispatch(usersActions.changeCurrentPager(index))
   const data = await users.getUsers(index, pageNumber)
   dispatch(usersActions.setUser(data.items))
   dispatch(usersActions.stopFetching())
} 
export const getLocalUsersByDimaTK = (arrayIndex : number, pageNumber : number) => async(dispatch : any) => {
   dispatch(usersActions.isFetchingA())
   dispatch(usersActions.setCurrentArrayElement(arrayIndex))
   const data  = await users.getUsers(arrayIndex, pageNumber)
   dispatch(usersActions.setUser(data.items))
   dispatch(usersActions.stopFetching())
} 
export const setNonLocalUsersByDimaTK = (arrayIndex : number, pageNumber : number, currentDouble : number) => 
async (dispatch : any) => {
   dispatch(getLocalUsersByDimaTK(arrayIndex,pageNumber))
   dispatch(usersActions.changeCurrentPager(currentDouble))
} 

export const unfollowCircle = (idForBut : number, index : number) => async (dispatch : any) =>{
dispatch(usersActions.buttonIsAvaiable(false, idForBut))
const data = await follow.unfollowReq(idForBut)
   if(data.resultCode === 0)  
      dispatch(usersActions.setUnfollowed(index))
   else console.log('error')
      dispatch(usersActions.buttonIsAvaiable(true,idForBut))
}

export const followCircle = (idForBut : number, index : number) =>async (dispatch : any) => {
   dispatch(usersActions.buttonIsAvaiable(false,idForBut))
   const  data  = await follow.followReq(idForBut)
   if(data.resultCode === 0)
      dispatch(usersActions.setFollowed(index))
   else console.log('error')
      dispatch(usersActions.buttonIsAvaiable(true,idForBut))
}
export default usersInfoReducer



