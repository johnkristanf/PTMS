import axios, { AxiosResponse } from "axios";
import { DOMAIN_NAME } from "../../envPaths";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteStaffAccessRequest = (request_id: number): Promise<AxiosResponse | any> => {
    return axios.delete(`${DOMAIN_NAME}/access/request/delete/${request_id}`, {
        withCredentials: true
    });
}