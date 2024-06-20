import axios, { AxiosResponse } from "axios";
import { LoginCredentials, LoginRole, StaffAccount } from "../../types/auth";


export const Login = async (loginCredentials: LoginCredentials): Promise<LoginRole | undefined> => {

    try {
        const response = await axios.post("http://localhost:4040/auth/login", loginCredentials, {
            withCredentials: true
        })
        const statusOk = response.status === 200 

        
        if (statusOk) {
            const role = response.data;
            console.log("response: ", response);

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
        
        return undefined;
        
    } catch (error) {
        console.error(error)
    }
}



export function CreateStaffAccount(data: StaffAccount): Promise<AxiosResponse<any, any>> {
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
