import axios, { AxiosResponse } from "axios";

export function FetchStaffAccounts(): Promise<AxiosResponse<any, any>> {
    return axios.get("http://localhost:4040/auth/fetch/staff", {
        withCredentials: true
    });
}


export async function FetchAdminAccount(){
    try {
        const response = await axios.get("http://localhost:4040/auth/fetch/admin", {
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
    return axios.get("http://localhost:4040/auth/fetch/login/account", {
        withCredentials: true
    });
}

export const FetchLoginApplicant = (): Promise<AxiosResponse<any, any>> => {
    return axios.get("http://localhost:4040/auth/fetch/applicant", {
        withCredentials: true
    });
}

export const FetchStaffAccountById = (): Promise<AxiosResponse<any, any>> => {
    console.log("fetchh by iddd")
    return axios.get("http://localhost:4040/auth/staff", {
        withCredentials: true
    });
}