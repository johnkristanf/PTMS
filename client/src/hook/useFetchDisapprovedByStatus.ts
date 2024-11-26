import { useQuery } from "@tanstack/react-query";
import { FetchDisApprovedApplications, FetchDisApprovedReleaser } from "../http/get/application";
import { Application } from "../types/application";

export const useFetchDisapprovedByStatus = (isReleaser: boolean | undefined, searchTerm: string, selectedMonth: string) => {

    const queryFn = async () => {
        if(isReleaser){
            return await FetchDisApprovedReleaser("not_set", searchTerm, selectedMonth)
        } else {
            return await FetchDisApprovedApplications(searchTerm, selectedMonth);
        }
    }
    const { data: response } = useQuery({
        queryKey: ["paid_applications", searchTerm, selectedMonth],
        queryFn,
    });


    const disapprovedApplication: Application[] = response?.data || [];

    return {
        disapprovedApplication
    }
}