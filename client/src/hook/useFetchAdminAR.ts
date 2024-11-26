import { useQuery } from "@tanstack/react-query";
import { FetchAdminAccessRequest } from "../http/get/access";
import { LoginAccount } from "../types/auth";
import { FetchLoginAccount } from "../http/get/auth";
import { FetchPendingAccessRequestTypes } from "../types/access";

export const useFetchAdminAR = () => {

    const { data: response } = useQuery({
        queryKey: ["login_account"],
        queryFn: FetchLoginAccount,
    });

    const loginAccount: LoginAccount = response?.data; 

    const { data: pendingAccessRequestResponse } = useQuery({
        queryKey: ["admin_access_request", loginAccount && loginAccount.adminType, loginAccount && loginAccount.id],
        queryFn: async () => {
            const data = await FetchAdminAccessRequest(loginAccount.adminType || "", loginAccount.id);
            return data;
        },
    });

    const adminAccessRequest: FetchPendingAccessRequestTypes[] = pendingAccessRequestResponse?.data || [];

    console.log("adminAccessRequest: ", adminAccessRequest);

    return {
        adminAccessRequest
    }
}