import axios, { AxiosResponse } from "axios";
import { AccessRoleTypes } from "../../types/access";
import { DOMAIN_NAME } from "../../envPaths";



export function RequestAccessRole(data: AccessRoleTypes): Promise<AxiosResponse<unknown, unknown>> {
    return axios.post(`${DOMAIN_NAME}/access/request/role`, data, {
        withCredentials: true
    });
}

export function OpenGrantedPage(access_role: string): Promise<AxiosResponse<unknown, unknown>> {
    return axios.post(`${DOMAIN_NAME}/access/open/page`, { access_role }, {
        withCredentials: true
    });
}
