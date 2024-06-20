import axios from "axios";

export const FetchInboxes = async (user_id_num: number, selectedFilter: string) => {
    const user_id = user_id_num.toString()
    const params = new URLSearchParams({ user_id, selectedFilter });

    return axios.get(`http://localhost:4040/application/inboxes?${params.toString()}`, {
        withCredentials: true
    });
}
