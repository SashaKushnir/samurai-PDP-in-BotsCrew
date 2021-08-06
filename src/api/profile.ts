import Axios, { AxiosResponse } from "axios";
import { ApiCommonResultType, BaseURL, bu_wc_h } from "./api";
import { PhotosType, ProfileByUserIdType } from "../components/Redux/profile/profileInfoReducer";

type PhotosUpdateType = ApiCommonResultType<{photos: PhotosType}>

export const profile = {
    setFriendsProfile: (friendsId: number | null) => {
        return Axios.get<ProfileByUserIdType>(BaseURL + `profile/${friendsId}`).then(res=>res.data)
            //.then(response => response.data)
    },
    profileStatusPUT: (status: string) => {
        return bu_wc_h.put<ApiCommonResultType<unknown>>('profile/status', {
            status: status
        })
    },
    profileStatusUserIdGET: (userId: number | null) => {
        return Axios.get<string>(BaseURL + `profile/status/${userId}`)
    },
    profilePhotoUpdatePut: (fileName: string | Blob) => {
        let formData = new FormData();
        formData.append("image", fileName);
        return bu_wc_h.put<PhotosUpdateType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    profileUpdatePut: (newProfileData: ProfileByUserIdType) => {
        return bu_wc_h.put('profile', newProfileData)
    }
}