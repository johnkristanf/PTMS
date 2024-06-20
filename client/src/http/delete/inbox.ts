import axios, { AxiosResponse } from "axios";

export function deleteInbox(inbox_id: number): Promise<AxiosResponse<any, any>> {

    console.log("inbox_id: ", inbox_id)
    return axios.delete(`http://localhost:4040/application/delete/${inbox_id}`, {
        withCredentials: true
    });
  
}
