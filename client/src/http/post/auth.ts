/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { LoginCredentials, SignupCredentials, StaffAccount } from "../../types/auth";
import { DOMAIN_NAME } from "../../envPaths";



export const StaffAccountLogin = async (loginCredentials: LoginCredentials): Promise<string> => {

    try {
        const response = await axios.post(`${DOMAIN_NAME}/auth/staff_account/login`, loginCredentials, {
            withCredentials: true
        })
        const statusOk = response.status === 200; 
        const timeout = response.status === 408;
        const unauthorized = response.status === 401;

        
        if (statusOk) {
            const role = response.data;

            switch (role) {
                case "architectural":
                    window.location.href = "/architectural/dashboard";
                    break;
                case "electrical":
                    window.location.href = "/electrical/dashboard";
                    break;
                case "civil":
                    window.location.href = "/civil/dashboard";
                    break;

                case "RECEIVER":
                    window.location.href = "/receiver/pending/applications";
                    break;
                case "SCANNER":
                    window.location.href = "/scanner/approved";
                    break;
                case "RELEASER":
                    window.location.href = "/releaser/application";
                    break;
                    
                default:
                    window.location.href = "/";
                    break;
            }
        }

        if (timeout){
            return "timeout"
        } else if(unauthorized){
            return "unauthorized";
        }

        return "success";
                
    } catch (error) {
        console.error(error);
        return "unauthorized";

    }
}


export const SignupApplicant = async (signupCrendentials: SignupCredentials): Promise<string> => {
    try {
        const response = await axios.post(`${DOMAIN_NAME}/auth/applicant/signup`, signupCrendentials);
        console.log("response signup: ", response);

        return "signup_success";
            
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            console.error("Axios error response: ", error.response);

            if (error.response.status === 403) {
                return "need_verification";
            }
        }

        return "Error in Sign Up";
    }
};



export const ApplicantLogin = async (loginCredentials: LoginCredentials): Promise<string> => {

    try {
        const response = await axios.post(`${DOMAIN_NAME}/auth/applicant/login`, loginCredentials, {
            withCredentials: true
        })
        const timeout = response.status === 408;
        const unauthorized = response.status === 401;

        
        if (timeout){
            return "timeout"
        } else if(unauthorized){
            return "unauthorized";
        }

        return "success";
                
    } catch (error) {
        console.error(error);
        return "unauthorized";

    }
}



export function CreateStaffAccount(data: StaffAccount): Promise<AxiosResponse<unknown, unknown>> {
    return axios.post(`${DOMAIN_NAME}/auth/create/staff`, data, {
        withCredentials: true
    });
}



export const SignOut = async () => {

    try {
        const response = await axios.post(`${DOMAIN_NAME}/auth/signout`, {}, {
            withCredentials: true
        })
        const statusOk = response.status === 200 

        if(statusOk) window.location.href = "/"
        
    } catch (error) {
        console.error(error)
    }
}
