import axios, { AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteStaffAccessRequest = (request_id: number): Promise<AxiosResponse | any> => {
    return axios.delete(`http://localhost:4040/access/request/delete/${request_id}`, {
        withCredentials: true
    });
}