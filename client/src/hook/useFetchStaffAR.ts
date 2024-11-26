import { useQuery } from "@tanstack/react-query";
import { FetchLoginAccount } from "../http/get/auth";
import { LoginAccount } from "../types/auth";
import { FetchStaffAccessRequests } from "../http/get/access";
import { FetchPendingAccessRequestTypes } from "../types/access";


export const useFetchStaffAR = () => {
    const { data: response } = useQuery({
        queryKey: ["login_account"],
        queryFn: FetchLoginAccount,
    });
    
    const loginAccount: LoginAccount = response?.data; 
    
    const { data: staffAccessRequestsResponse } = useQuery({
        queryKey: ["staff_access_request", loginAccount && loginAccount.id],
        queryFn: async () => {
            const data = await FetchStaffAccessRequests(loginAccount.id);
            return data;
        },
    });
    
    const staffAccessRequests: FetchPendingAccessRequestTypes[] = staffAccessRequestsResponse?.data || [];

    return {
        staffAccessRequests
    }
}