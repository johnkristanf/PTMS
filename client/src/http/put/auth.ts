import axios, { AxiosResponse } from "axios";
import { EditStaffAccountType } from "../../types/auth";

export const EditStaffAccount = async (staffEditData: EditStaffAccountType): Promise<AxiosResponse<unknown, unknown>> => {
    try {
        const { name, email, new_password, old_password, staff_id } = staffEditData;
        const response = await axios.put(`http://localhost:4040/auth/edit/staff/${staff_id}`, { name, email, new_password, old_password }, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};
