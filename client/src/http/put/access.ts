import axios, { AxiosResponse } from "axios";
import { UpdateRequestAccessStatusTypes } from "../../types/access";

export function UpdateRequestAccessStatus(data: UpdateRequestAccessStatusTypes): Promise<AxiosResponse<unknown, unknown>> {
    const { id, status } = data
    
    return axios.put(`http://localhost:4040/access/update/status/${id}`, {status}, {
        withCredentials: true
    });
}
