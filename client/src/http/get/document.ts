/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { DOMAIN_NAME } from "../../envPaths";


export const GetProfilePicture = async (user_id: number): Promise<AxiosResponse<any, any>> => {
    return axios.get(`${DOMAIN_NAME}/document/get/profile/${user_id}`, {
        withCredentials: true
    });
};
