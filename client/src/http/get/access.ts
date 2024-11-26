import axios from "axios";
import { DOMAIN_NAME } from "../../envPaths";

export const FetchPendingAccessRequest = async () => {
    return axios.get(`${DOMAIN_NAME}/access/fetch/pending`, {
        withCredentials: true
    });
}

export const FetchAdminAccessRequest = async (admin_type: string, user_id: number) => {
    return axios.get(`${DOMAIN_NAME}/access/fetch/admin/${admin_type}/${user_id}`, {
        withCredentials: true
    });
}


export const FetchStaffAccessRequests = async (user_id: number) => {
    return axios.get(`${DOMAIN_NAME}/access/fetch/request/staff/${user_id}`, {
        withCredentials: true
    });
}
