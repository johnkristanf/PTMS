import axios, { AxiosResponse } from "axios";
import { UpdateRequestAccessStatusTypes } from "../../types/access";
import { DOMAIN_NAME } from "../../envPaths";


export function UpdateRequestAccessStatus(data: UpdateRequestAccessStatusTypes): Promise<AxiosResponse<unknown, unknown>> {
    const { id, status } = data
    
    return axios.put(`${DOMAIN_NAME}/access/update/status/${id}`, {status}, {
        withCredentials: true
    });
}
