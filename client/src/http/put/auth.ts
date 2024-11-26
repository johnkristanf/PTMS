import axios, { AxiosResponse } from "axios";
import { EditStaffAccountType } from "../../types/auth";
import { DOMAIN_NAME } from "../../envPaths";

export const EditStaffAccount = async (staffEditData: EditStaffAccountType): Promise<AxiosResponse<unknown, unknown>> => {
    try {
        const { name, email, new_password, old_password, staff_id } = staffEditData;
        const response = await axios.put(`${DOMAIN_NAME}/auth/edit/staff/${staff_id}`, { name, email, new_password, old_password }, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};
