/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";


export const UploadDocument = async (data: FormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`http://localhost:4040/document/upload`, data, {
        withCredentials: true
    });
};


export const GetDocuments = async (application_code: string): Promise<AxiosResponse<any, any>> => {
    return axios.get(`http://localhost:4040/document/get/${application_code}`, {
        withCredentials: true
    });
};