import axios from "axios";
import { DOMAIN_NAME } from "../../envPaths";
import { AdditionalFormDocument, ApplicantFormDocument, CompletionFormDocument, FirstStepReqDocument } from "@/types/document";

export const UpdateApplicantFormDocuments = async (data: ApplicantFormDocument) => {
    return axios.put(`${DOMAIN_NAME}/application/update/applicantForm/document`, data, {
        withCredentials: true
    });
}


export const UpdateFirstStepReqDocuments = async (data: FirstStepReqDocument) => {
    return axios.put(`${DOMAIN_NAME}/application/update/firstStepReq/document`, data, {
        withCredentials: true
    });
}


export const UpdateCompletionFormDocuments = async (data: CompletionFormDocument) => {
    return axios.put(`${DOMAIN_NAME}/application/update/completionForm/document`, data, {
        withCredentials: true
    });
}


export const UpdateAdditionalFormDocuments = async (data: AdditionalFormDocument) => {
    return axios.put(`${DOMAIN_NAME}/application/update/additionalForm/document`, data, {
        withCredentials: true
    });
}



export const FinishScanning = async (applicationID: number) => {

    try {
        return axios.put(`${DOMAIN_NAME}/application/finish/scanning`, { application_id: applicationID }, {
            withCredentials: true
        });
    } catch (error) {
        console.error(error)
    }
}
