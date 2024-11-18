import axios from "axios";

export const FetchPendingAccessRequest = async () => {
    return axios.get(`http://localhost:4040/access/fetch/pending`, {
        withCredentials: true
    });
}
