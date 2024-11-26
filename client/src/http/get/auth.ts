/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { DOMAIN_NAME } from "../../envPaths";

export function FetchStaffAccounts(): Promise<AxiosResponse<any, any>> {
    return axios.get(`${DOMAIN_NAME}/auth/fetch/staff`, {
        withCredentials: true
    });
}


export async function FetchAdminAccount(){
    try {
        const response = await axios.get(`${DOMAIN_NAME}/auth/fetch/admin`, {
            withCredentials: true
        })

        console.log("response fetch:", response)

        const statusOK = response.status === 200
        if(statusOK) return true
        
    } catch (error: any) {

        if (error.response && error.response.status === 401) {
            window.location.href = "/unauthorized";
        } else {
            console.error(error);
        }
    }
}


export async function FetchLoginAccount():  Promise<AxiosResponse<any, any>> {
    return axios.get(`${DOMAIN_NAME}/auth/fetch/login/account`, {
        withCredentials: true
    });
}

export const FetchLoginApplicant = (): Promise<AxiosResponse<any, any>> => {
    return axios.get(`${DOMAIN_NAME}/auth/fetch/applicant`, {
        withCredentials: true
    });
}

export const FetchStaffAccountById = (): Promise<AxiosResponse<any, any>> => {
    console.log("fetchh by iddd")
    return axios.get(`${DOMAIN_NAME}/auth/staff`, {
        withCredentials: true
    });
}