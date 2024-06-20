import axios, { AxiosResponse } from "axios";

export const EditStaffAccount = async (staffEditData: { name: string; email: string; password: string; staff_id: number }): Promise<AxiosResponse<any, any>> => {
    try {
        const { name, email, password, staff_id } = staffEditData;
        const response = await axios.put(`http://localhost:4040/auth/edit/staff/${staff_id}`, { name, email, password }, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};
