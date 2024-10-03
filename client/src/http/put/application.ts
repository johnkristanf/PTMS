/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { ArchitecturalRequirementFormData, CivilRequirementFormData, DisapprovalData, ElectricalRequirementFormData, FirstStepRequirements, UpdateApplicationCodeTypes } from "../../types/application";

export const UpdateApplicationCode = async (updateData: UpdateApplicationCodeTypes): Promise<AxiosResponse<any, any>> => {
    const { application_code, application_id } = updateData

    return axios.put(`http://localhost:4040/application/update/code/${application_id}`, { application_code }, {
        withCredentials: true
    });
};



export const UpdateApplicationApprovedAdmin = async (data: {application_id: number, admin_approved: string}): Promise<AxiosResponse<any, any>> => {
    const { application_id, admin_approved } = data;
    return axios.put(`http://localhost:4040/application/update/approval/${application_id}`, { admin_approved }, {
        withCredentials: true
    });
};


export const UpdateApplicationDisapprovedAdmin = async (data: DisapprovalData): Promise<AxiosResponse<any, any>> => {
    console.log("data dis: ", data)
    return axios.put(`http://localhost:4040/application/update/disapproval`, data, {
        withCredentials: true
    });
};



export const UpdateApplicationStatus = async (data: {application_id: number, status: string}): Promise<AxiosResponse<any, any>> => {
    const { application_id, status } = data;
    return axios.put(`http://localhost:4040/application/update/status/${application_id}`, { status }, {
        withCredentials: true
    });
};




export const UpdateFirstStepRequirements = (checkRequirements: FirstStepRequirements): Promise<AxiosResponse<any, any>> => {
    console.log("checkRequirements", checkRequirements)
    return axios.post(`http://localhost:4040/application/update/requirements`, checkRequirements, {
        withCredentials: true
    });
};


export const CheckedArchituralRequirements = async (architectRequirements: ArchitecturalRequirementFormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`http://localhost:4040/application/check/architectural/requirements`, architectRequirements , {
        withCredentials: true
    });
};


export const CheckedCivilRequirements = async (civilRequirements: CivilRequirementFormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`http://localhost:4040/application/check/civil/requirements`, civilRequirements , {
        withCredentials: true
    });
};


export const CheckedElectricalRequirements = async (electricalRequirements: ElectricalRequirementFormData): Promise<AxiosResponse<any, any>> => {
    return axios.post(`http://localhost:4040/application/check/electrical/requirements`, electricalRequirements , {
        withCredentials: true
    });
};
