import axios from "axios";
import { DOMAIN_NAME } from "../../envPaths";

export const FetchInboxes = async (user_id_num: number, selectedFilter: string) => {
    const user_id = user_id_num.toString()
    const params = new URLSearchParams({ user_id, selectedFilter });

    return axios.get(`${DOMAIN_NAME}/application/inboxes?${params.toString()}`, {
        withCredentials: true
    });
}
