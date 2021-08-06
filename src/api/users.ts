import { bu_wc } from "./api";

export const users = {
    getUsers: (currentUserPage:number | null = 1 , pageNumber: number | null = 10) => {
        return bu_wc.get(`users?page=${currentUserPage}&count=${pageNumber}`).then(response => response.data)
    }
}