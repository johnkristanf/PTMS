import axios, {AxiosResponse} from "axios";


export const DeleteStaffAccount = (staff_id: number): Promise<AxiosResponse | any> => {
    return axios.delete(`http://localhost:4040/auth/delete/staff/${staff_id}`, {
        withCredentials: true
    });
}