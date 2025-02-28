
export type ApplicantInfo = {
    lastName: string,
    firstName: string,
    middleInitial: string,

    formOwnership: string,
    constructOwnbyEnterprise: string,

    addressNo: string,
    street: string,
    barangay: string,
    municipality: string,
    zipCode: string,
    locationForConstruct_Install: string


    taxAccountNo: string,
    telNo: string,
    tctNo: string,

    permit_type: string
}


export type Application = {
    application_id: number
    applicationCode: string
    serviceType: string

    firstname: string
    middleInitial: string
    lastName: string

    addressNo: string,
    barangay: string,
    street: string,
    municipality: string,
    zipCode: string,
    locationForConstruct_Install: string

    formOwnership: string,
    constructOwnbyEnterprise: string,

    taxAccountNo: string,
    telNo: string,
    tctNo: string,
    permit_type: string

    email: string
    user_id: number

    release_date?: string
    admin_approved?: string
    
    assessment_status: string

    applicant_form_documents: string[]
    completion_form_documents: string[]
    additional_form_documents: string[]

    is_finish_scanning: boolean,

    scopeType: string
    characterOfOccupancy: string
}


export type ReportApplication = {
    application_id: number
    applicationCode: string

    firstname: string
    middleInitial: string
    lastName: string

    addressNo: string,
    barangay: string,
    street: string,
    municipality: string,
    zipCode: string,
    
    permit_type: string
    application_status: string

    email: string
    user_id: number

    release_date?: string
    admin_approved?: string
    
}

export type DisapprovalData = {
    application_id: number

    firstname: string
    middleInitial: string
    lastName: string

    email: string
    user_id: number

    disapproval_message?: string
}


export type ReleaseDateData = {
    application_id: number

    date_from?: string
    date_to?: string
    message?: string

    email: string
    user_id: number
    status?: string

}



export type AppliedServices = {
    application_id?: number
    applicationCode?: string
    serviceType: string
    
    firstname: string
    middleInitial: string
    lastName: string

    addressNo: string,
    barangay: string,
    street: string,
    municipality: string,
    zipCode: string,
    locationForConstruct_Install: string

    formOwnership: string,
    constructOwnbyEnterprise: string,

    taxAccountNo: string,
    telNo: string,
    tctNo: string,

    permit_type: string,
    status: string

    scopeType: string
    characterOfOccupancy: string

    cellData?: string
    labelData?: string
    checkboxData?: string
}

export type ApplicationByYear = {
    year: string,
    total_application: number
}

export type ApplicationByPermitType = {
    permit_type: string,
    total_application: number
}

export type ApplicationByBarangay = {
    barangay: string,
    total_application: number
}



export type AssessmentApplicationData = {
    application_id?: number,
    applicant_name: string,
    permit_type: string
}

export type ApplicationLetterInfoTypes = {
    firstName:   string;
    middleName:  string;
    familyName:  string;
    permit_type: string;
}

export type UpdateApplicationCodeTypes = {
    application_id: number,
    application_code: string,

    firstname: string
    middleInitial: string
    lastName: string

    user_id: number
    email: string
}



export type PermitName = {
    firstName: string,
    lastName: string,
    middleInitial: string
    taxAccountNo: string
}


export type PermitAddress = {
    addressNo: string;
    street: string;
    barangay: string;
    city: string;
    zipCode: string;
    telNo: string
}


export type ConstructionOwnership =  {
    ownedByEnterprise: string;
    formOfOwnership: string;
}

export type ConstructionLocationTypes = {
    location: string;
    tct_no: string;
}


export type FirstStepRequirements = {
    application_id: number
    
    accomplished_form: boolean

    landTitle: boolean
    taxDeclaration: boolean
    taxClearance: boolean

    deedSale: boolean
    leaseSale: boolean
    affidavitConsent: boolean
    partitionHeirship: boolean
    certificateAward: boolean

    plans: boolean
    specifications: boolean
    billMaterials: boolean
    structuralAnalysis: boolean


    architectEngineer: boolean
    sanitaryEngineer: boolean
    mechanicalEngineer: boolean
    electronicsEngineer: boolean

    barangayClearance: boolean
    locationalClearance: boolean


}


export type FirstStepRequirementsFetching = {
    requirements_id: number
    
    accomplished_form: boolean

    landTitle: boolean
    taxDeclaration: boolean
    taxClearance: boolean

    deedSale: boolean
    leaseSale: boolean
    affidavitConsent: boolean
    partitionHeirship: boolean
    certificateAward: boolean

    plans: boolean
    specifications: boolean
    billMaterials: boolean
    structuralAnalysis: boolean


    architectEngineer: boolean
    sanitaryEngineer: boolean
    mechanicalEngineer: boolean
    electronicsEngineer: boolean

    barangayClearance: boolean
    locationalClearance: boolean


}


export type ArchitecturalRequirementFormData = {
    application_id: number;

    Ramps: boolean;
    Stairs: boolean;
    WalkWays: boolean;
    Comfort_Rooms: boolean;
    Drinking_Fountains: boolean;
    Switches_Controls: boolean;
    Telephone_Booth: boolean;
    Automatic_AlarmSystem: boolean;
    Directional_Signs: boolean;
    Reserved_Parking: boolean;
    Wallbay_Sections: boolean;
    Stairs_Interior_Exterior: boolean;
    Fire_Exit: boolean;
    BuiltIn_Cabinets: boolean;
    Partitions: boolean;
    Schedule_Doors_Windows: boolean;
    Schedule_Finishes: boolean;
    Other_Architectural_Elements: boolean;
    Space_Plan: boolean;
    Architecture_Interior: boolean;
    Furniture_Furnishing_Equipments: boolean;
    Detail_Design_Architectural: boolean;
    Plan_Layout_Interior: boolean;
    Interior_Wall_Elevations: boolean;
    Floor_Ceiling_WallPatterns_Details: boolean;
    List_Material_Used: boolean;
    Cost_Estimates: boolean;
    Plans_Specific_Locations: boolean;
    Design_Accessibility_Facilities: boolean;
    Plan_Evacuation_Route: boolean;
    Details_Windows_FireExits: boolean;
    Details_FireResistive_Vertical_Openings: boolean;
    Details_FireResistive_Decorative_Materials: boolean;
};


export type CivilRequirementFormData = {
    application_id: number;
    Site_Development_Plan: boolean;
    Foundation_Plans: boolean;
    Roof_Floor_Framing_Plans: boolean;
    Details_Schedule_Civil_WorkElements: boolean;
    Structural_Analysis_Design: boolean;
    Boring_Load_Test: boolean;
    Seismic_Analysis: boolean;
}

export type  ElectricalRequirementFormData = {
    application_id: number;
    Location_Site_Plan: boolean;
    Legend_Symbols: boolean;
    General_Notes: boolean;
    Electrical_Layout: boolean;
    Schedule_Loads: boolean;
    Design_Analysis: boolean;
    One_Line_Diagram: boolean;
}



export type OccupancyData = {
    assessment_id: number,
    date_paid:     string,
    or_number:     string,
    receipt_number:     string,
    project_proposed:     string,
    character_occupancy: string,

    fee_paid:           number,
    location:           string,

    first_name:         string,
    middle_initial:     string,
    last_name:          string,

}