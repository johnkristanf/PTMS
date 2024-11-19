import axios, { AxiosResponse } from "axios";
import { AccessRoleTypes } from "../../types/access";

export function RequestAccessRole(data: AccessRoleTypes): Promise<AxiosResponse<unknown, unknown>> {
    return axios.post("http://localhost:4040/access/request/role", data, {
        withCredentials: true
    });
}

export function OpenGrantedPage(access_role: string): Promise<AxiosResponse<unknown, unknown>> {
    return axios.post("http://localhost:4040/access/open/page", { access_role }, {
        withCredentials: true
    });
}
