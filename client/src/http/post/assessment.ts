import axios, { AxiosResponse } from "axios";
import { AssessmentTypes, AssessmentsFormData } from "../../types/assessment";


export function SetAssesment(assessmentData: AssessmentTypes): Promise<AxiosResponse<any | any>> {
    return axios.post("http://localhost:4040/application/update/assessment", assessmentData, {
        withCredentials: true
    })        
}


export function SetPaidAssessment(assessment: AssessmentsFormData): Promise<AxiosResponse<any | any>> {
    return axios.post("http://localhost:4040/application/assessment/paid", assessment, {
        withCredentials: true
    })        
}