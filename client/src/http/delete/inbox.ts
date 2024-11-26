/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { DOMAIN_NAME } from "../../envPaths";

export function deleteInbox(inbox_id: number): Promise<AxiosResponse<any, any>> {

    console.log("inbox_id: ", inbox_id)
    return axios.delete(`${DOMAIN_NAME}/application/delete/${inbox_id}`, {
        withCredentials: true
    });
  
}
