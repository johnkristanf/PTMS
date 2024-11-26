import { useQuery } from "@tanstack/react-query";
import { FetchPendingAccessRequest } from "../http/get/access";
import { FetchPendingAccessRequestTypes } from "../types/access";

export const useFetchStaffPendingAR = () => {
    const { data: pendingAccessRequestResponse } = useQuery({
        queryKey: ["staff_pending_access_request"],
        queryFn: async () => {
            const data = await FetchPendingAccessRequest();
            return data;
        },
    });

    const pendingAccessReqest: FetchPendingAccessRequestTypes[] = pendingAccessRequestResponse?.data || [];

    return {
        pendingAccessReqest
    }
}