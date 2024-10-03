package types


type ApplicantInfo struct {
	FirstName     string `json:"firstname"`
	MiddleInitial string `json:"middleInitial"`
	LastName      string `json:"lastName"`
	ServiceType   string `json:"serviceType"`

	AddressNumber             string `json:"addressNo"`
	Barangay                  string `json:"barangay"`
	Street                    string `json:"street"`
	Municipality              string `json:"municipality"`
	ZipCode                   string `json:"zipCode"`
	LocationForConsAndInstall string `json:"locationForConstruct_Install"`

	FormOfOwnerShip             string `json:"formOwnership"`
	ConstructionOwnbyEnterprise string `json:"constructOwnbyEnterprise"`

	TaxAccountNumber string `json:"taxAccountNo"`
	TelNumber        string `json:"telNo"`
	TctNumber        string `json:"tctNo"`
	PermitType       string `json:"permit_type"`

	Email  string `json:"email"`
	UserID int64  `json:"user_id"`

	ScopeType            string `json:"scopeType"`
	CharacterOfOccupancy string `json:"characterOfOccupancy"`
}

type ApplicantInfoFetching struct {
	ID              		  	int64  `json:"application_id"`
	ApplicationCode 			string `json:"applicationCode"`
	ServiceType     		  	string `json:"serviceType"`

	FirstName     				string `json:"firstname"`
	MiddleInitial 				string `json:"middleInitial"`
	LastName      				string `json:"lastName"`

	AddressNumber             	string `json:"addressNo"`
	Barangay                  	string `json:"barangay"`
	Street                    	string `json:"street"`
	Municipality              	string `json:"municipality"`
	ZipCode                   	string `json:"zipCode"`
	LocationForConsAndInstall 	string `json:"locationForConstruct_Install"`

	FormOfOwnerShip             string `json:"formOwnership"`
	ConstructionOwnbyEnterprise string `json:"constructOwnbyEnterprise"`

	TaxAccountNumber 			string `json:"taxAccountNo"`
	TelNumber        			string `json:"telNo"`
	TctNumber        			string `json:"tctNo"`

	PermitType  				string `json:"permit_type"`
	Email       				string `json:"email"`
	UserID       				string `json:"user_id"`
	ApplicantID 				int64  `json:"applicantID"`
	Status      				string `json:"assessment_status"`

	AdminApproved    			string `json:"admin_approved"`
}

type AppliedServicesFetching struct {
	ID              			int64  `json:"application_id"`
	ApplicationCode 			string `json:"applicationCode"`
	ServiceType    				string `json:"serviceType"`

	FirstName     				string `json:"firstname"`
	MiddleInitial 				string `json:"middleInitial"`
	LastName      				string `json:"lastName"`

	AddressNumber             	string `json:"addressNo"`
	Barangay                  	string `json:"barangay"`
	Street                    	string `json:"street"`
	Municipality              	string `json:"municipality"`
	ZipCode                   	string `json:"zipCode"`
	LocationForConsAndInstall 	string `json:"locationForConstruct_Install"`

	FormOfOwnerShip             string `json:"formOwnership"`
	ConstructionOwnbyEnterprise string `json:"constructOwnbyEnterprise"`

	TaxAccountNumber 			string `json:"taxAccountNo"`
	TelNumber        			string `json:"telNo"`
	TctNumber        			string `json:"tctNo"`

	PermitType 					string `json:"permit_type"`
	Status     					string `json:"status"`

	ScopeType            		string `json:"scopeType"`
	CharacterOfOccupancy 		string `json:"characterOfOccupancy"`
}

type AssessmentTypes struct {
	ApplicationID int64 `json:"application_id"`

	AssessmentControlNumber string `json:"assessment_controlNo"`
	Date                    string `json:"date"`
	ProjectProposed         string `json:"project_proposed"`
	Location                string `json:"location"`
	Units                   string `json:"units"`

	BuildingConstruction     float64 `json:"building_construction"`
	ElectricalInstallation   float64 `json:"electrical_installation"`
	MechanicallInstallation  float64 `json:"mechanical_installation"`
	PlumbingInstallation     float64 `json:"plumbing_installation"`
	ElectronicsInstallation  float64 `json:"electronics_installation"`
	BuildingAccessories      float64 `json:"building_accessories"`
	OtherAccessories         float64 `json:"other_accessories"`
	BuildingOccupancy        float64 `json:"building_occupancy"`
	BuildingInspection       float64 `json:"building_inspection"`
	FinesSurChargesPenalties float64 `json:"fines_surcharges_penalties"`
}

type AssessmentRender struct {
	ID               int64  `json:"assessment_id"`
	AssControlNumber string `json:"assessment_controlNo"`
	Date             string `json:"date"`
	ProjectProposed  string `json:"project_proposed"`
	Location         string `json:"location"`
	Units            string `json:"units"`

	BuildingConstruction    float64 `json:"building_construction"`
	ElectricalInstallation  float64 `json:"electrical_installation"`
	MechanicalInstallation  float64 `json:"mechanical_installation"`
	PlumbingInstallation    float64 `json:"plumbing_installation"`
	ElectronicInstallation  float64 `json:"electronics_installation"`
	BuildingAccessories     float64 `json:"building_accessories"`
	OtherAccessories        float64 `json:"other_accessories"`
	BuildingOccupancy       float64 `json:"building_occupancy"`
	BuildingInspection      float64 `json:"building_inspection"`
	FinesSurchargePenalties float64 `json:"fines_surcharges_penalties"`
	TotalAssesment         float64 `json:"total_assessments"`
	Status                  string  `json:"status"`
}

type UpdateApplicationCode struct {
	ApplicationCode string `json:"application_code"`
}

type UpdateApplicationApproval struct {
	AdminApproved 			string `json:"admin_approved"`
	Status                  string  `json:"status"`
}

type UpdateApplicationDisApproval struct {
	ApplicationID		int64  `json:"application_id"`
	FirstName 			string `json:"firstname"`
	MiddleInitial 		string `json:"middleInitial"`
	LastName 			string `json:"lastName"`

	Email 				string `json:"email"`
	UserID 				int64  `json:"user_id"`

	DisapprovalMessage 	string `json:"disapproval_message"`
}

type UpdateApplicationStatus struct {
	Status string `json:"status"`
}


type ApplicationApprovalFetching struct{
	Results []*ApplicantInfoFetching
	Error 	error
}

type FormattedInbox struct {
	ID         		int64 	`json:"inbox_id"`
	Message    		string	`json:"message"`
	Status    		string	`json:"status"`
	UserID     		int64	`json:"user_id"`
	TimeCreated  	string 	`json:"time_created"`
}



type FirstStepRequirements struct {
    ApplicationID       int  `json:"application_id"`
    AccomplishedForm    bool `json:"accomplished_form"`
    LandTitle           bool `json:"landTitle"`
    TaxDeclaration      bool `json:"taxDeclaration"`
    TaxClearance        bool `json:"taxClearance"`
    DeedSale            bool `json:"deedSale"`
    LeaseSale           bool `json:"leaseSale"`
    AffidavitConsent    bool `json:"affidavitConsent"`
    PartitionHeirship   bool `json:"partitionHeirship"`
    CertificateAward    bool `json:"certificateAward"`
    Plans               bool `json:"plans"`
    Specifications      bool `json:"specifications"`
    BillMaterials       bool `json:"billMaterials"`
    StructuralAnalysis  bool `json:"structuralAnalysis"`
    ArchitectEngineer   bool `json:"architectEngineer"`
    SanitaryEngineer    bool `json:"sanitaryEngineer"`
    MechanicalEngineer  bool `json:"mechanicalEngineer"`
    ElectronicsEngineer bool `json:"electronicsEngineer"`
    BarangayClearance   bool `json:"barangayClearance"`
    LocationalClearance bool `json:"locationalClearance"`
}


type FirstStepRequirementsFetching struct {
    ID       					int  `json:"requirements_id"`
    Fully_Accomplished_Form    	bool `json:"accomplished_form"`

    Latest_Copy_Land_Title           bool `json:"landTitle"`
    Latest_Tax_Declaration      bool `json:"taxDeclaration"`
    Latest_Tax_Clearance        bool `json:"taxClearance"`

    Notarized_Deed_AbsoluteSale            bool `json:"deedSale"`
    Notarized_Contract_LeaseSale           bool `json:"leaseSale"`
    Notarized_Affidavit_Consent    bool `json:"affidavitConsent"`
    Notarized_ExtraJuridicial   bool `json:"partitionHeirship"`
    Certificate_Award_Affidavit    bool `json:"certificateAward"`

    Plans               bool `json:"plans"`
    Specifications      bool `json:"specifications"`
    Bill_Materials_Cost_Estimate       bool `json:"billMaterials"`
    Structural_Analysis  bool `json:"structuralAnalysis"`

    Licensed_Architect_Civil   bool `json:"architectEngineer"`
    Licensed_Sanitary_Plumber    bool `json:"sanitaryEngineer"`
    Licensed_Mechanical  bool `json:"mechanicalEngineer"`
    Licensed_Electronics bool `json:"electronicsEngineer"`

    Barangay_Clearance   bool `json:"barangayClearance"`
    Locational_Clearance bool `json:"locationalClearance"`
}

type AssessmentsPaidFormData struct {
    DatePaid      string `json:"datePaid" form:"datePaid"`
    ORNumber      string `json:"orNumber" form:"orNumber"`
    ApplicationID *int   `json:"applicationID" form:"applicationID"`
}



// Don't change the spelling of the swtches controls cause it is based on the db schema name
// if you wish to change it you need to migrate again the db schema

type ArchitecturalRequirements struct {
    ApplicationID                        int `json:"application_id"`
    
    Ramps                                 bool `json:"Ramps"`
    Stairs                                bool `json:"Stairs"`
    WalkWays                              bool `json:"WalkWays"`
    ComfortRooms                          bool `json:"Comfort_Rooms"`
    DrinkingFountains                     bool `json:"Drinking_Fountains"`
    Swtches_Controls                      bool `json:"Switches_Controls"`
    TelephoneBooth                        bool `json:"Telephone_Booth"`
    AutomaticAlarmSystem                  bool `json:"Automatic_AlarmSystem"`
    DirectionalSigns                      bool `json:"Directional_Signs"`
    ReservedParking                       bool `json:"Reserved_Parking"`
    WallbaySections                       bool `json:"Wallbay_Sections"`
    StairsInteriorExterior                bool `json:"Stairs_Interior_Exterior"`
    FireExit                              bool `json:"Fire_Exit"`
    BuiltInCabinets                       bool `json:"BuiltIn_Cabinets"`
    Partitions                            bool `json:"Partitions"`
    ScheduleDoorsWindows                  bool `json:"Schedule_Doors_Windows"`
    ScheduleFinishes                      bool `json:"Schedule_Finishes"`
    OtherArchitecturalElements            bool `json:"Other_Architectural_Elements"`
    SpacePlan                             bool `json:"Space_Plan"`
    ArchitectureInterior                  bool `json:"Architecture_Interior"`
    FurnitureFunishingEquipments          bool `json:"Furniture_Furnishing_Equipments"`
    DetailDesignArchitectural             bool `json:"Detail_Design_Architectural"`
    PlanLayoutInterior                    bool `json:"Plan_Layout_Interior"`
    InteriorWallElevations                bool `json:"Interior_Wall_Elevations"`
    FloorCeilingWallPatternsDetails       bool `json:"Floor_Ceiling_WallPatterns_Details"`
    ListMaterialUsed                      bool `json:"List_Material_Used"`
    CostEstimates                         bool `json:"Cost_Estimates"`
    PlansSpecificLocations                bool `json:"Plans_Specific_Locations"`
    DesignAccessibilityFacilities         bool `json:"Design_Accessibility_Facilities"`
    PlanEvacuationRoute                   bool `json:"Plan_Evacuation_Route"`
    DetailsWindowsFireExits               bool `json:"Details_Windows_FireExits"`
    DetailsFireResistiveVerticalOpenings  bool `json:"Details_FireResistive_Vertical_Openings"`
    DetailsFireResistiveDecorativeMaterials bool `json:"Details_FireResistive_Decorative_Materials"`
}


type CivilRequirements struct{
	ApplicationID                         int     `json:"application_id"`
	Site_Development_Plan                 bool    `json:"Site_Development_Plan"`
	Foundation_Plans                      bool    `json:"Foundation_Plans"`
	Roof_Floor_Framing_Plans              bool    `json:"Roof_Floor_Framing_Plans"`
	Details_Schedule_Civil_WorkElements   bool    `json:"Details_Schedule_Civil_WorkElements"`
	Structural_Analysis_Design            bool    `json:"Structural_Analysis_Design"`
	Boring_Load_Test                      bool    `json:"Boring_Load_Test"`
	Seismic_Analysis                      bool    `json:"Seismic_Analysis"`
}


type ElectricalRequirements struct{
	ApplicationID                         int     `json:"application_id"`
	Location_Site_Plan                    bool    `json:"Location_Site_Plan"`
	Legend_Symbols                        bool    `json:"Legend_Symbols"`
	General_Notes              			  bool    `json:"General_Notes"`
	Electrical_Layout   				  bool    `json:"Electrical_Layout"`
	Schedule_Loads            			  bool    `json:"Schedule_Loads"`
	Design_Analysis                       bool    `json:"Design_Analysis"`
	One_Line_Diagram                      bool    `json:"One_Line_Diagram"`
}
