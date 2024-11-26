/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { DOMAIN_NAME } from "../../envPaths";



export const UploadDocument = async (data: FormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`${DOMAIN_NAME}/document/upload`, data, {
        withCredentials: true
    });
};


export const GetDocuments = async (application_code: string): Promise<AxiosResponse<any, any>> => {
    return axios.get(`${DOMAIN_NAME}/document/get/${application_code}`, {
        withCredentials: true
    });
};


export const UploadProfilePicture = async (data: FormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`${DOMAIN_NAME}/document/profile/upload`, data, {
        withCredentials: true
    });
};
