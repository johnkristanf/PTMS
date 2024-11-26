/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { ArchitecturalRequirementFormData, CivilRequirementFormData, DisapprovalData, ElectricalRequirementFormData, FirstStepRequirements, ReleaseDateData, UpdateApplicationCodeTypes } from "../../types/application";
import { DOMAIN_NAME } from "../../envPaths";




// -----------------------------------APPLICATIONS----------------------------------
export const UpdateApplicationCode = async (updateData: UpdateApplicationCodeTypes): Promise<AxiosResponse<any, any>> => {
    const { application_code, firstname, middleInitial, lastName, email, user_id, application_id } = updateData

    return axios.put(`${DOMAIN_NAME}/application/update/code/${application_id}`, { application_code, firstname, middleInitial, lastName, email, user_id }, {
        withCredentials: true
    });
};



export const UpdateApplicationApprovedAdmin = async (data: {application_id: number, admin_approved: string}): Promise<AxiosResponse<any, any>> => {
    const { application_id, admin_approved } = data;
    return axios.put(`${DOMAIN_NAME}/application/update/approval/${application_id}`, { admin_approved }, {
        withCredentials: true
    });
};


export const UpdateApplicationDisapprovedAdmin = async (data: DisapprovalData): Promise<AxiosResponse<any, any>> => {
    return axios.put(`${DOMAIN_NAME}/application/update/disapproval`, data, {
        withCredentials: true
    });
};



export const UpdateApplicationStatus = async (data: {application_id: number, status: string}): Promise<AxiosResponse<any, any>> => {
    const { application_id, status } = data;
    return axios.put(`${DOMAIN_NAME}/application/update/status/${application_id}`, { status }, {
        withCredentials: true
    });
};


export const SetReleaseDate = async (data: ReleaseDateData): Promise<AxiosResponse<any, any>> => {
    console.log("release date data: ", data);
    
    return axios.put(`${DOMAIN_NAME}/application/set/release/date`, data, {
        withCredentials: true
    });
};


export const SubmitToReleaser = async (application_id: string): Promise<AxiosResponse<any, any>> => {
    console.log("application_id: ", application_id);

    const params = new URLSearchParams({ application_id });
    
    return axios.put(`${DOMAIN_NAME}/application/submit/releaser?${params.toString()}`, {}, {
        withCredentials: true
    });
};


// -----------------------------------REQUIREMENTS----------------------------------
export const UpdateFirstStepRequirements = (checkRequirements: FirstStepRequirements): Promise<AxiosResponse<any, any>> => {
    console.log("checkRequirements", checkRequirements)
    return axios.post(`${DOMAIN_NAME}/application/update/requirements`, checkRequirements, {
        withCredentials: true
    });
};


export const CheckedArchituralRequirements = async (architectRequirements: ArchitecturalRequirementFormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`${DOMAIN_NAME}/application/check/architectural/requirements`, architectRequirements , {
        withCredentials: true
    });
};


export const CheckedCivilRequirements = async (civilRequirements: CivilRequirementFormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`${DOMAIN_NAME}/application/check/civil/requirements`, civilRequirements , {
        withCredentials: true
    });
};


export const CheckedElectricalRequirements = async (electricalRequirements: ElectricalRequirementFormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`${DOMAIN_NAME}/application/check/electrical/requirements`, electricalRequirements , {
        withCredentials: true
    });
};
