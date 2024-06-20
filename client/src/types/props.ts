import { ReactNode } from "react";
import { StaffAccountFetch } from "./auth";
import { AssessmentApplicationData } from "./application";

export interface StaffAccountModalFormProps {
    setOpenModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface EditStaffAccountModalFormProps {
    staff_id: number
    name: string
    email: string
    setStaffData: React.Dispatch<React.SetStateAction<StaffAccountFetch | undefined>>
}


export interface QueryProviderWrapperProps {
    children: ReactNode
}

export interface StaffAccountCardProps {
    setStaffData: React.Dispatch<React.SetStateAction<StaffAccountFetch | undefined>>
}

export interface AssessmentModalProps {
    applicantAssessmentInfo: AssessmentApplicationData,
    setAssessment: React.Dispatch<React.SetStateAction<boolean>> 

}