import axios from "axios";
import { DOMAIN_NAME } from "../../envPaths";

export const UpdateInboxStatus = async (inbox_id: number) => {
    return axios.put(`${DOMAIN_NAME}/application/inboxes/${inbox_id}`, {}, {
        withCredentials: true
    });
}