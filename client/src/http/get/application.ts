import axios from "axios";
import { DOMAIN_NAME } from "../../envPaths";


export const IsApplicationExists = async (firstName: string, lastName: string, permitType: string) => {

    try {
        const params = new URLSearchParams({ firstName, lastName, permitType });

        const response = await axios.get(`${DOMAIN_NAME}/application/exists?${params.toString()}`, {
            withCredentials: true
        });

        console.log("response in application: ", response);

        return response.data

    } catch (error) {
        console.error("Error in application exists checker: ", error);
    }
}


export const FetchTrashApplication = async (searchTerm: string, selectedMonth: string) => {
    const status = "Trash";
    const params = new URLSearchParams({ status, searchTerm, selectedMonth });

    return axios.get(`${DOMAIN_NAME}/application/get?${params.toString()}`, {
        withCredentials: true
    });
}



export const FetchPendingApplicantInfo = async (searchTerm: string, selectedMonth: string) => {
    const status = "Pending";
    const params = new URLSearchParams({ status, searchTerm, selectedMonth });

    return axios.get(`${DOMAIN_NAME}/application/get?${params.toString()}`, {
        withCredentials: true
    });
}


export const FetchPaidApplications = async (searchTerm: string, selectedMonth: string) => {
    const status = "Paid";
    const params = new URLSearchParams({ status, searchTerm, selectedMonth });

    return axios.get(`${DOMAIN_NAME}/application/get?${params.toString()}`, {
        withCredentials: true
    });
}


export const FetchApprovedApplications = async (searchTerm: string, selectedMonth: string) => {
    const status = "Approved";
    const params = new URLSearchParams({ status, searchTerm, selectedMonth });

    return axios.get(`${DOMAIN_NAME}/application/get?${params.toString()}`, {
        withCredentials: true
    });
}

export const FetchDisApprovedApplications = async (searchTerm: string, selectedMonth: string) => {
    const status = "Disapproved";
    const params = new URLSearchParams({ status, searchTerm, selectedMonth});

    return axios.get(`${DOMAIN_NAME}/application/get?${params.toString()}`, {
        withCredentials: true
    });
}


export const FetchDisApprovedReleaser = async (staffProccessStatus: string, searchTerm: string, selectedMonth: string) => {
    const params = new URLSearchParams({ staffProccessStatus, searchTerm, selectedMonth});

    return axios.get(`${DOMAIN_NAME}/application/disapproved/releaser?${params.toString()}`, {
        withCredentials: true
    });
}


export const FetchApplicationByStaffProccessStatus = async (status: string, searchTerm: string, selectedMonth: string) => {
    const params = new URLSearchParams({ status, searchTerm, selectedMonth});

    return axios.get(`${DOMAIN_NAME}/application/by/staff/proccess/status?${params.toString()}`, {
        withCredentials: true
    });
}


export const FetchReportApplication = async (searchTerm: string, selectedMonth: string) => {
    const params = new URLSearchParams({ searchTerm, selectedMonth});

    return axios.get(`${DOMAIN_NAME}/application/report?${params.toString()}`, {
        withCredentials: true
    });
}



export const FetchAppliedServices = async () => {
    return axios.get("http://localhost:4040/application/get/applied", {
            withCredentials: true
    });
}

export const FetchCheckedRequirements = async (applicationID: number) => {
    return axios.get(`${DOMAIN_NAME}/application/fetch/requirements/${applicationID}`, {
        withCredentials: true
    });
}

export const FetchArchiteturalRequirements = async (applicationID: number) => {
    return axios.get(`${DOMAIN_NAME}/application/fetch/architectural/requirements/${applicationID}`, {
        withCredentials: true
    });
}

export const FetchCivilRequirements = async (applicationID: number) => {
    return axios.get(`${DOMAIN_NAME}/application/fetch/civil/requirements/${applicationID}`, {
        withCredentials: true
    });
}


export const FetchElectricalRequirements = async (applicationID: number) => {
    return axios.get(`${DOMAIN_NAME}/application/fetch/electrical/requirements/${applicationID}`, {
        withCredentials: true
    });
}



export const FetchRequirements = async (applicationID: number, adminType: string) => {
    return axios.get(`${DOMAIN_NAME}/application/fetch/${adminType}/requirements/${applicationID}`, {
        withCredentials: true
    });
}
