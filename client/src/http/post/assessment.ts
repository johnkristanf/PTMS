/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { AssessmentTypes, AssessmentsFormData } from "../../types/assessment";
import { DOMAIN_NAME } from "../../envPaths";



export function SetAssesment(assessmentData: AssessmentTypes): Promise<AxiosResponse<any | any>> {
    return axios.post(`${DOMAIN_NAME}/application/update/assessment`, assessmentData, {
        withCredentials: true
    })        
}


export function SetPaidAssessment(assessment: AssessmentsFormData): Promise<AxiosResponse<any | any>> {
    return axios.post(`${DOMAIN_NAME}/application/assessment/paid`, assessment, {
        withCredentials: true
    })        
}