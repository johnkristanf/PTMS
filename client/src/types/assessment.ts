export type AssessmentTypes = {
    application_id?: number,

    assessment_controlNo: string,
    date: string,

    project_proposed: string

    location: string
    units: string

    building_construction: number,
    electrical_installation: number,
    mechanical_installation: number,
    plumbing_installation: number,
    electronics_installation: number,
    building_accessories: number,
    other_accessories: number,
    building_occupancy: number,
    building_inspection: number,
    fines_surcharges_penalties: number,

}


export type AssessmentRender = {
    assessment_id: number,
    applicantName: string,
    permitType: string, 

    assessment_controlNo: string,
    date: string,
    project_proposed: string
    location: string
    units: string

    building_construction: number,
    electrical_installation: number,
    mechanical_installation: number,
    plumbing_installation: number,
    electronics_installation: number,
    building_accessories: number,
    other_accessories: number,
    building_occupancy: number,
    building_inspection: number,
    fines_surcharges_penalties: number,
    total_assessments: number
    status: string
}


export type FeeList = {
    name: string,
    value: number
}

export type OrderPaymentValuesTypes = {
    controlNumber: string;
    date: string;
    name: string;
    permit_type: string;
    projectProposed: string;
    location: string;
    units: string;
}

export type AssessmentsFormData = {
    datePaid: string;
    orNumber: string;
    applicationID: number | undefined;
};