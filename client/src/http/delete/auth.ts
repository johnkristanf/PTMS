/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {AxiosResponse} from "axios";
import { DOMAIN_NAME } from "../../envPaths";


export const DeleteStaffAccount = (staff_id: number): Promise<AxiosResponse | any> => {
    return axios.delete(`${DOMAIN_NAME}/auth/delete/staff/${staff_id}`, {
        withCredentials: true
    });
}