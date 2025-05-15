
export type ApplicantFormDocument = {
    application_id: number,
    applicant_form_documents: string[]
}

export type FirstStepReqDocument = {
    application_id: number,
    first_step_req_documents: string[]
}


export type CompletionFormDocument = {
    application_id: number,
    completion_form_documents: string[]
}


export type AdditionalFormDocument = {
    application_id: number,
    additional_form_documents: string[]
}



export const firstStepRequirementsKeyMapping = {
    'Fully Accomplished Application Form': 'accomplished_form',
    'Latest Certified true copy of Land Title (ROD)': 'landTitle',
    'Latest Tax Declaration': 'taxDeclaration',
    'Latest Tax Clearance': 'taxClearance',
    'Notarized Deed of Absolute Sale': 'deedSale',
    'Notarized Contract of Lease Sale': 'leaseSale',
    'Notarized Affidavit of Consent': 'affidavitConsent',
    'Notarized Extra-Judicial Partition/Affidavit of Heirship with Consent': 'partitionHeirship',
    'Certificate of Award/Affidavit of Undertaking/any document showing proof of authority (Government of Public Land)':
        'certificateAward',
    Plans: 'plans',
    Specifications: 'specifications',
    'Bill of Materials and Cost Estimate': 'billMaterials',
    'Structural Analysis': 'structuralAnalysis',
    'A duly licensed Architect or Civil Engineer': 'architectEngineer',
    'In case of architectural, A duly licensed Sanitary Engineer or Master Plumber, in case of':
        'sanitaryEngineer',
    'A duly licensed Professional Mechanical Engineer, in case of': 'mechanicalEngineer',
    'A duly licensed Professional Electronics Engineer, in case of Electrical':
        'electronicsEngineer',
    'Barangay Clearance where the project is located': 'barangayClearance',
    'Locational Clearance': 'locationalClearance',
}


