import axios from "axios";


export const FetchPendingApplicantInfo = async (searchTerm: string, selectedMonth: string, selectedWeek: string) => {
    const status = "Pending";
    const params = new URLSearchParams({ status, searchTerm, selectedMonth, selectedWeek });

    return axios.get(`http://localhost:4040/application/get?${params.toString()}`, {
        withCredentials: true
    });
}


export const FetchPaidApplications = async (searchTerm: string) => {
    const status = "Paid";
    const params = new URLSearchParams({ status, searchTerm });

    return axios.get(`http://localhost:4040/application/get?${params.toString()}`, {
        withCredentials: true
    });
}


export const FetchApprovedApplications = async (searchTerm: string) => {
    const status = "Approved";
    const params = new URLSearchParams({ status, searchTerm });

    return axios.get(`http://localhost:4040/application/get?${params.toString()}`, {
        withCredentials: true
    });
}

export const FetchDisApprovedApplications = async (searchTerm: string) => {
    const status = "Disapproved";
    const params = new URLSearchParams({ status, searchTerm });

    return axios.get(`http://localhost:4040/application/get?${params.toString()}`, {
        withCredentials: true
    });
}




export const FetchAppliedServices = async () => {
    return axios.get("http://localhost:4040/application/get/applied", {
            withCredentials: true
    });
}

export const FetchCheckedRequirements = async (applicationID: number) => {
    return axios.get(`http://localhost:4040/application/fetch/requirements/${applicationID}`, {
        withCredentials: true
    });
}

export const FetchArchiteturalRequirements = async (applicationID: number) => {
    return axios.get(`http://localhost:4040/application/fetch/architectural/requirements/${applicationID}`, {
        withCredentials: true
    });
}

export const FetchCivilRequirements = async (applicationID: number) => {
    return axios.get(`http://localhost:4040/application/fetch/civil/requirements/${applicationID}`, {
        withCredentials: true
    });
}


export const FetchElectricalRequirements = async (applicationID: number) => {
    return axios.get(`http://localhost:4040/application/fetch/electrical/requirements/${applicationID}`, {
        withCredentials: true
    });
}

