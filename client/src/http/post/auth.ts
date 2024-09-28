import axios, { AxiosResponse } from "axios";
import { LoginCredentials, StaffAccount } from "../../types/auth";


export const Login = async (loginCredentials: LoginCredentials): Promise<boolean> => {

    try {
        const response = await axios.post("http://localhost:4040/auth/login", loginCredentials, {
            withCredentials: true
        })
        const statusOk = response.status === 200 

        
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
                    window.location.href = "/releaser/approved";
                    break;
                    
                default:
                    window.location.href = "/";
                    break;
            }
        }

        return true;
                
    } catch (error) {
        console.error(error)
        return false;
    }
}



export function CreateStaffAccount(data: StaffAccount): Promise<AxiosResponse<unknown, unknown>> {
    return axios.post("http://localhost:4040/auth/create/staff", data, {
        withCredentials: true
    });
}



export const SignOut = async () => {

    try {
        const response = await axios.post("http://localhost:4040/auth/signout", {}, {
            withCredentials: true
        })
        const statusOk = response.status === 200 

        if(statusOk) window.location.href = "/"
        
    } catch (error) {
        console.error(error)
    }
}
