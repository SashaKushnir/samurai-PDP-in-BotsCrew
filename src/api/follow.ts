import { ApiCommonResultType, bu_wc_h } from "./api";

export const follow = {
    unfollowReq: (requestId: number) => {
        return bu_wc_h.delete<ApiCommonResultType<unknown>>(`follow/${requestId}`
        ).then(response => response.data)
    },
    followReq: (requestId: number) => {
        return bu_wc_h.post<ApiCommonResultType<unknown>>(`follow/${requestId}`, null
        ).then(response => response.data)
    }
}