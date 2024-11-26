import { useQuery } from "@tanstack/react-query";
import { FetchApplicationByStaffProccessStatus, FetchApprovedApplications } from "../http/get/application";
import { Application } from "../types/application";

export const useFetchApprovedByStatus = (staffRole: string, searchTerm: string, selectedMonth: string) => {

    const queryFn = async () => {
        if (staffRole === "scanner") {
            return await FetchApplicationByStaffProccessStatus("not_set", searchTerm, selectedMonth);
        } else if (staffRole === "releaser") {
            return await FetchApplicationByStaffProccessStatus("submitted_application", searchTerm, selectedMonth);
        } else {
            return await FetchApprovedApplications(searchTerm, selectedMonth);
        }
    };

    const { data: response } = useQuery({
        queryKey: ["approved_applications", searchTerm, selectedMonth, staffRole], 
        queryFn,
    });

    const approvedApplication: Application[] = response?.data || [];

    console.log("approvedApplication: ", approvedApplication);
    

    return {
        approvedApplication,
    };
};
