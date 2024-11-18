import axios, { AxiosResponse } from "axios";
import { AccessRoleTypes } from "../../types/access";

export function RequestAccessRole(data: AccessRoleTypes): Promise<AxiosResponse<unknown, unknown>> {
    return axios.post("http://localhost:4040/access/staff/request", data, {
        withCredentials: true
    });
}
