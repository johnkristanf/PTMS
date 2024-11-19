import axios from "axios";

export const FetchPendingAccessRequest = async () => {
    return axios.get(`http://localhost:4040/access/fetch/pending`, {
        withCredentials: true
    });
}

export const FetchAdminAccessRequest = async (admin_type: string, user_id: number) => {
    return axios.get(`http://localhost:4040/access/fetch/admin/${admin_type}/${user_id}`, {
        withCredentials: true
    });
}


export const FetchStaffAccessRequests = async (user_id: number) => {
    return axios.get(`http://localhost:4040/access/fetch/request/staff/${user_id}`, {
        withCredentials: true
    });
}
