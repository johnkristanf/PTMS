import axios, { AxiosResponse } from "axios";
import { LoginCredentials, StaffAccount } from "../../types/auth";
import { DOMAIN_NAME } from "../../envPaths";



export const Login = async (loginCredentials: LoginCredentials): Promise<string> => {

    try {
        const response = await axios.post(`${DOMAIN_NAME}/auth/login`, loginCredentials, {
            withCredentials: true
        })
        const statusOk = response.status === 200; 
        const timeout = response.status === 408;
        const unauthorized = response.status === 401;

        
        if (statusOk) {
            const role = response.data;

            switch (role) {
                case "architectural":
                    window.location.href = "/architectural/paid/applications";
                    break;
                case "electrical":
                    window.location.href = "/electrical/paid/applications";
                    break;
                case "civil":
                    window.location.href = "/civil/paid/applications";
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
