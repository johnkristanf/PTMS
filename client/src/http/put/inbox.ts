import axios from "axios";

export const UpdateInboxStatus = async (inbox_id: number) => {
    return axios.put(`http://localhost:4040/application/inboxes/${inbox_id}`, {}, {
        withCredentials: true
    });
}