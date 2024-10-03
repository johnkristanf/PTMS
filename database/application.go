package database

import (
	"fmt"
	"strings"
	"time"

	"github.com/johnkristanf/TMS-IPAS/types"
)


type Application struct {
	ID        					int64		`gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`

	ServiceType					string		`gorm:"not null"`
	ApplicationCode				string		`gorm:"not null"`
	FirstName  					string		`gorm:"not null"`
	MiddleInitial  				string		`gorm:"not null"`
	LastName  					string		`gorm:"not null"`

	Barangay 					string 		`gorm:"not null"`
	Street 						string 		`gorm:"not null"`
	Municipality 				string 		`gorm:"not null"`
	ZipCode 					string 		`gorm:"not null"`
	LocationForConsAndInstall 	string 		`gorm:"not null"`

	FormOfOwnerShip 			string 		`gorm:"not null"`
	ConstructionOwnbyEnterprise string 		`gorm:"not null"`


	TaxAccountNumber			string		`gorm:"not null"`
	TelNumber 					string 		`gorm:"not null"`
	TctNumber					string		`gorm:"not null"`

	PermitType					string		`gorm:"not null"`
	Status						string		`gorm:"not null"`
	Email     					string 		`gorm:"not null;index"`
	UserID						int64		`gorm:"not null"`

	ScopeType                   string 		`gorm:"type:text"`
	CharacterOfOccupancy        string 		`gorm:"type:text"`

	AdminApproved				string		`gorm:"not null"`

	CreatedAt 					time.Time 	`gorm:"not null;autoCreateTime"`
}

type First_Step_Requirements struct {
	ID                             int64     `gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	Fully_Accomplished_Form        bool      `gorm:"not null;default:false"`
	
	Latest_Copy_Land_Title         bool      `gorm:"not null;default:false"`
	Latest_Tax_Declaration         bool      `gorm:"not null;default:false"`
	Latest_Tax_Clearance           bool      `gorm:"not null;default:false"`

	Notarized_Deed_AbsoluteSale    bool      `gorm:"not null;default:false"`
	Notarized_Contract_LeaseSale   bool      `gorm:"not null;default:false"`
	Notarized_Affidavit_Consent    bool      `gorm:"not null;default:false"`
	Notarized_ExtraJuridicial      bool      `gorm:"not null;default:false"`
	Certificate_Award_Affidavit    bool      `gorm:"not null;default:false"`

	Plans                          bool      `gorm:"not null;default:false"`
	Specifications                 bool      `gorm:"not null;default:false"`
	Bill_Materials_Cost_Estimate   bool      `gorm:"not null;default:false"`
	Structural_Analysis            bool      `gorm:"not null;default:false"`

	Licensed_Architect_Civil       bool      `gorm:"not null;default:false"`
	Licensed_Sanitary_Plumber      bool      `gorm:"not null;default:false"`
	Licensed_Mechanical            bool      `gorm:"not null;default:false"`
	Licensed_Electronics           bool      `gorm:"not null;default:false"`

	Barangay_Clearance             bool      `gorm:"not null;default:false"`
	Locational_Clearance           bool      `gorm:"not null;default:false"`
	ApplicationID                  int64     `gorm:"not null"`
	CreatedAt                      time.Time `gorm:"not null;autoCreateTime"`
}


// Don't change the spelling of the swtches controls cause it is based on the db schema name
// if you wish to change it you need to migrate again the db schema
type Architectural_Requirements struct {
	ID                                     int64     `gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	Ramps                                  bool    `gorm:"not null;default:false"`
	Stairs                                 bool    `gorm:"not null;default:false"`
	WalkWays                               bool    `gorm:"not null;default:false"`
	Comfort_Rooms                          bool    `gorm:"not null;default:false"`
	Drinking_Fountains                     bool    `gorm:"not null;default:false"`
	Swtches_Controls                       bool    `gorm:"not null;default:false"`
	Telephone_Booth                        bool    `gorm:"not null;default:false"`
	Automatic_AlarmSystem                  bool    `gorm:"not null;default:false"`
	Directional_Signs                      bool    `gorm:"not null;default:false"`
	Reserved_Parking                       bool    `gorm:"not null;default:false"`
	Wallbay_Sections                       bool    `gorm:"not null;default:false"`
	Stairs_Interior_Exterior               bool    `gorm:"not null;default:false"`
	Fire_Exit                              bool    `gorm:"not null;default:false"`
	BuiltIn_Cabinets                       bool    `gorm:"not null;default:false"`
	Partitions                             bool    `gorm:"not null;default:false"`

	Schedule_Doors_Windows                 bool    `gorm:"not null;default:false"`
	Schedule_Finishes                      bool    `gorm:"not null;default:false"`
	Other_Architectural_Elements           bool    `gorm:"not null;default:false"`

	Space_Plan                             bool    `gorm:"not null;default:false"`
	Architecture_Interior                  bool    `gorm:"not null;default:false"`
	Furniture_Funishing_Equipments         bool    `gorm:"not null;default:false"`
	Detail_Design_Architectural            bool    `gorm:"not null;default:false"`
	Plan_Layout_Interior                   bool    `gorm:"not null;default:false"`
	Interior_Wall_Elevations               bool    `gorm:"not null;default:false"`
	Floor_Ceiling_WallPatterns_Details     bool    `gorm:"not null;default:false"`
	List_Material_Used                     bool    `gorm:"not null;default:false"`
	Cost_Estimates                         bool    `gorm:"not null;default:false"`

	Plans_Specific_Locations               bool    `gorm:"not null;default:false"`
	Design_Accessibility_Facilities        bool    `gorm:"not null;default:false"`
	Plan_Evacuation_Route                  bool    `gorm:"not null;default:false"`
	Details_Windows_FireExits              bool    `gorm:"not null;default:false"`
	Details_FireResistive_Vertical_Openings bool    `gorm:"not null;default:false"`
	Details_FireResistive_Decorative_Materials bool `gorm:"not null;default:false"`

	ApplicationID                          int64     `gorm:"not null"`
	CreatedAt                              time.Time `gorm:"not null;autoCreateTime"`
}

type Civil_Requirements struct {
	ID                                    int64     `gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	Site_Development_Plan                 bool    `gorm:"not null;default:false"`
	Foundation_Plans                      bool    `gorm:"not null;default:false"`
	Roof_Floor_Framing_Plans              bool    `gorm:"not null;default:false"`
	Details_Schedule_Civil_WorkElements   bool    `gorm:"not null;default:false"`
	Structural_Analysis_Design            bool    `gorm:"not null;default:false"`
	Boring_Load_Test                      bool    `gorm:"not null;default:false"`
	Seismic_Analysis                      bool    `gorm:"not null;default:false"`

	ApplicationID                         int64     `gorm:"not null"`
	CreatedAt                             time.Time `gorm:"not null;autoCreateTime"`
}

type Electrical_Requirements struct {
	ID                                    int64     `gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	Location_Site_Plan                    bool      `gorm:"not null;default:false"`
	Legend_Symbols                        bool      `gorm:"not null;default:false"`
	General_Notes                         bool      `gorm:"not null;default:false"`
	Electrical_Layout   				  bool      `gorm:"not null;default:false"`
	Schedule_Loads            			  bool      `gorm:"not null;default:false"`
	Design_Analysis                       bool      `gorm:"not null;default:false"`
	One_Line_Diagram                      bool      `gorm:"not null;default:false"`
	ApplicationID                         int64     `gorm:"not null"`
	CreatedAt                             time.Time `gorm:"not null;autoCreateTime"`
}


type Assessment struct {
	ID        					int64			`gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_assesmentID"`
	DatePaid					string			`gorm:"not null"`
	ORNumber					string			`gorm:"not null"`

	AssControlNumber  			string			`gorm:"not null"`
	Date						string			`gorm:"not null"`
	ProjectProposed  			string			`gorm:"not null"`
	Location  					string			`gorm:"not null"`
	Units  						string			`gorm:"not null"`


	BuildingConstruction  		float64			`gorm:"type:numeric;not null"`
	ElectricalInstallation  	float64			`gorm:"type:numeric;not null"`
	MechanicalInstallation  	float64			`gorm:"type:numeric;not null"`
	PlumbingInstallation  		float64			`gorm:"type:numeric;not null"`
	ElectronicInstallation  	float64			`gorm:"type:numeric;not null"`
	BuildingAccessories  		float64			`gorm:"type:numeric;not null"`
	OtherAccessories  			float64			`gorm:"type:numeric;not null"`
	BuildingOccupancy  			float64			`gorm:"type:numeric;not null"`
	BuildingInspection  		float64			`gorm:"type:numeric;not null"`
	FinesSurchargePenalties  	float64			`gorm:"type:numeric;not null"`
	TotalAssesment  			float64			`gorm:"type:numeric;not null"`
	ApplicationID  				int64			`gorm:"not null"`
	Status 						string			`gorm:"not null"`

	CreatedAt 					time.Time 		`gorm:"not null;autoCreateTime"`
}


type Inbox struct {
	ID   			int64		`gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_inboxID"`
	Message  		string    	`gorm:"type:text;not null"`
	Status     		string    	`gorm:"type:text;not null;default:unread"`
	UserID			int64		`gorm:"not null"`
	CreatedAt 		time.Time 	`gorm:"not null;autoCreateTime"`
}


type APPLICATION_DB_METHOD interface {
	AddApplication(applicantInfo *types.ApplicantInfo) error
	FetchApplication(string, string, string, string) ([]*types.ApplicantInfoFetching, error)
	FetchAppliedServices(int64) ([]*types.AppliedServicesFetching, error)
	FetchRequirements(int64) (*types.FirstStepRequirementsFetching, error)

	FetchArchitechturalRequirements(int64) (*types.ArchitecturalRequirements, error)
	FetchCivilRequirements(int64) (*types.CivilRequirements, error)
	FetchElectricalRequirements(int64) (*types.ElectricalRequirements, error)

	UpdateAssessment(*types.AssessmentTypes) error
	UpdateApplicationCode(int64, string) error
	UpdateApplicationApproval(int64, string) error
	UpdateApplicationDisApproval(int64, string) error

	UpdateFirstStepRequirements(*types.FirstStepRequirements) error

	CheckArchitecturalRequirements(*types.ArchitecturalRequirements) error
	CheckCivilRequirements(*types.CivilRequirements) error
	CheckElectricalRequirements(*types.ElectricalRequirements) error

	CreateArchitecturalRequirements(int64) error
	CreateCivilRequirements(int64) error
	CreateElectricalRequirements(int64) error
	CreateFirstStepRequirements(int64) error

	
	UpdateApplicationStatus(int64, string) error
	AllAdminsApplicationApproval([]*types.ApplicantInfoFetching) error

	SetPaidAsssesment(types.AssessmentsPaidFormData) error
	FetchAssessments(int64) (*types.AssessmentRender, error)
	ApplicationInbox(int64, string) error
	DisapprovalInbox(int64, string) error

	FetchInboxesToday(int64) ([]*types.FormattedInbox, error)
	FetchUnreadInboxes(int64) ([]*types.FormattedInbox, error)
	FetchAllInboxes(int64) ([]*types.FormattedInbox, error)

	UpdateInboxStatus(int64) error
	DeleteInbox(string) error
}


// ----------------------ASSESSMENTS----------------------
func (sql *SQL) CreateAssessments(applicationID int64) error {

	assessments := &Assessment{
        BuildingConstruction:     0,
        ElectricalInstallation:   0,
        MechanicalInstallation:   0,
        PlumbingInstallation:     0,
        ElectronicInstallation:   0,
        BuildingAccessories:      0,
        OtherAccessories:         0,
        BuildingOccupancy:        0,
        BuildingInspection:       0,
        FinesSurchargePenalties:  0,
		TotalAssesment: 		  0,
        ApplicationID:            applicationID,
		Status: "set",
    }


	if result := sql.DB.Create(&assessments); result.Error != nil {
		return result.Error
	}

	return nil

}


func (sql *SQL) UpdateAssessment(assessments *types.AssessmentTypes) error {


	totalAssessment := assessments.BuildingConstruction +
		assessments.ElectricalInstallation +
		assessments.MechanicallInstallation +
		assessments.PlumbingInstallation +
		assessments.ElectronicsInstallation +
		assessments.BuildingAccessories +
		assessments.OtherAccessories +
		assessments.BuildingOccupancy +
		assessments.BuildingInspection +
		assessments.FinesSurChargesPenalties


	result := sql.DB.Model(&Assessment{}).Where("application_id = ?", assessments.ApplicationID).Updates(&Assessment{
		AssControlNumber: assessments.AssessmentControlNumber,
		Date: assessments.Date,
		ProjectProposed: assessments.ProjectProposed,
		Location: assessments.Location,
		Units: assessments.Units,

		BuildingConstruction: assessments.BuildingConstruction,
		ElectricalInstallation: assessments.ElectricalInstallation,
		MechanicalInstallation: assessments.MechanicallInstallation,
		PlumbingInstallation: assessments.PlumbingInstallation,
		ElectronicInstallation: assessments.ElectronicsInstallation,

		BuildingAccessories: assessments.BuildingAccessories,
		OtherAccessories: assessments.OtherAccessories,

		BuildingOccupancy: assessments.BuildingOccupancy,
		BuildingInspection: assessments.BuildingInspection,
		FinesSurchargePenalties: assessments.FinesSurChargesPenalties,

		TotalAssesment: totalAssessment,
		Status: "pending",
	})

	if result.Error != nil{
		return result.Error
	}

	return nil
}


func FormatDate(dateStr string) (string, error) {
	parsedDate, err := time.Parse("2006-01-02", dateStr)
	if err != nil {
		return "", err
	}

	formattedDate := parsedDate.Format("Jan 2, 2006")
	return formattedDate, nil
}

func (sql *SQL) SetPaidAsssesment(assessments types.AssessmentsPaidFormData) error {

	formattedDate, err := FormatDate(assessments.DatePaid)
	if err != nil {
		return err
	}

	result := sql.DB.Model(&Assessment{}).Where("application_id = ?", assessments.ApplicationID).Updates(&Assessment{
		DatePaid: formattedDate,
		ORNumber: assessments.ORNumber,
		Status: "paid",
	})

	if result.Error != nil{
		return result.Error
	}

	return nil
}


func (sql *SQL) FetchAssessments(applicationID int64) (assessments *types.AssessmentRender, err error) {

	result := sql.DB.Table("assessments").
				Select("id, ass_control_number, date, project_proposed, location, units, building_construction, electrical_installation, mechanical_installation, plumbing_installation, electronic_installation, building_accessories, other_accessories, building_occupancy, building_inspection, fines_surcharge_penalties, total_assesment, status").
				Where("application_id = ?", applicationID).
				Find(&assessments)

	if err = result.Error; err != nil{
		return nil, err
	}		
	
	return assessments, nil

}


// ----------------------REQUIREMENTS----------------------

func (sql *SQL) CreateFirstStepRequirements(applicationID int64) error {
	requirements := &First_Step_Requirements{
		ApplicationID: applicationID,
	}

	if result := sql.DB.Create(&requirements); result.Error != nil {
		return result.Error
	}

	return nil
}

func (sql *SQL) FetchRequirements(applicationID int64) (*types.FirstStepRequirementsFetching, error) {

	var requirements types.FirstStepRequirementsFetching

    result := sql.DB.Table("first_step_requirements").
        Select("id, fully_accomplished_form, latest_copy_land_title, latest_tax_declaration, latest_tax_clearance, notarized_deed_absolute_sale, notarized_contract_lease_sale, notarized_affidavit_consent, notarized_extra_juridicial, certificate_award_affidavit, plans, specifications, bill_materials_cost_estimate, structural_analysis, licensed_architect_civil, licensed_sanitary_plumber, licensed_mechanical, licensed_electronics, barangay_clearance, locational_clearance").
        Where("application_id = ?", applicationID).
        First(&requirements)

    if err := result.Error; err != nil {
        return nil, err
    }

    return &requirements, nil

}

func (sql *SQL) FetchArchitechturalRequirements(applicationID int64) (*types.ArchitecturalRequirements, error){

	var requirements *types.ArchitecturalRequirements

	result := sql.DB.Table("architectural_requirements").
        Select("application_id, ramps, stairs, walk_ways, comfort_rooms, drinking_fountains, swtches_controls, telephone_booth, automatic_alarm_system, directional_signs, reserved_parking, wallbay_sections, stairs_interior_exterior, fire_exit, built_in_cabinets, partitions, schedule_doors_windows, schedule_finishes, other_architectural_elements, space_plan, architecture_interior, furniture_funishing_equipments, detail_design_architectural, plan_layout_interior, interior_wall_elevations, floor_ceiling_wall_patterns_details, list_material_used, cost_estimates, plans_specific_locations, design_accessibility_facilities, plan_evacuation_route, details_windows_fire_exits, details_fire_resistive_vertical_openings, details_fire_resistive_decorative_materials").
        Where("application_id = ?", applicationID).
        First(&requirements)

    if err := result.Error; err != nil {
        return nil, err
    }

	return requirements, nil
}

func (sql *SQL) FetchCivilRequirements(applicationID int64) (*types.CivilRequirements, error){

	var requirements *types.CivilRequirements

	result := sql.DB.Table("civil_requirements").
        Select("application_id, site_development_plan, foundation_plans, roof_floor_framing_plans, details_schedule_civil_work_elements, structural_analysis_design, boring_load_test, seismic_analysis").
        Where("application_id = ?", applicationID).
        First(&requirements)

    if err := result.Error; err != nil {
        return nil, err
    }

	return requirements, nil
}


func (sql *SQL) FetchElectricalRequirements(applicationID int64) (*types.ElectricalRequirements, error){

	var requirements *types.ElectricalRequirements

	result := sql.DB.Table("electrical_requirements").
        Select("application_id, location_site_plan, legend_symbols, general_notes, electrical_layout, schedule_loads, design_analysis, one_line_diagram").
        Where("application_id = ?", applicationID).
        First(&requirements)

    if err := result.Error; err != nil {
        return nil, err
    }

	return requirements, nil
}

func (sql *SQL) BuildAdminsRequirements(applicationID int64) error {
	errorChan := make(chan error, 3)

	go func() {
		if err := sql.CreateArchitecturalRequirements(applicationID); err != nil{
			errorChan <- err
		}
	}()
	
	go func() {
		if err := sql.CreateCivilRequirements(applicationID); err != nil{
			errorChan <- err
		}
	}()
	
	go func() {
		if err := sql.CreateElectricalRequirements(applicationID); err != nil{
			errorChan <- err
		}
	}()
	close(errorChan)

	var err error
	for i := 0; i < 3; i++ {
		if e := <-errorChan; e != nil {
			err = e
		}
	}

	if err != nil {
		return err
	}

	return nil
}


func (sql *SQL) UpdateFirstStepRequirements(requirements *types.FirstStepRequirements) error {

	result := sql.DB.Model(&First_Step_Requirements{}).Where("application_id = ?", requirements.ApplicationID).Updates(&First_Step_Requirements{
		Fully_Accomplished_Form:    		requirements.AccomplishedForm,
		Latest_Copy_Land_Title:           	requirements.LandTitle,
		Latest_Tax_Declaration:      		requirements.TaxDeclaration,
		Latest_Tax_Clearance:        		requirements.TaxClearance,

		Notarized_Deed_AbsoluteSale:        requirements.DeedSale,
		Notarized_Contract_LeaseSale:       requirements.LeaseSale,
		Notarized_Affidavit_Consent:    	requirements.AffidavitConsent,
		Notarized_ExtraJuridicial:   		requirements.PartitionHeirship,
		Certificate_Award_Affidavit:    	requirements.CertificateAward,

		Plans:               				requirements.Plans,
		Specifications:      				requirements.Specifications,
		Bill_Materials_Cost_Estimate:       requirements.BillMaterials,
		Structural_Analysis:  				requirements.StructuralAnalysis,

		Licensed_Architect_Civil:   		requirements.ArchitectEngineer,
		Licensed_Sanitary_Plumber:    		requirements.SanitaryEngineer,
		Licensed_Mechanical:  				requirements.MechanicalEngineer,
		Licensed_Electronics: 				requirements.ElectronicsEngineer,

		Barangay_Clearance:   				requirements.BarangayClearance,
		Locational_Clearance: 				requirements.LocationalClearance,
	})

	if result.Error != nil {
		return result.Error
	}

	return nil
}



func (sql *SQL) CheckArchitecturalRequirements(requirements *types.ArchitecturalRequirements) error {

	updateData := &Architectural_Requirements{
		Ramps:                                  requirements.Ramps,
		Stairs:                                 requirements.Stairs,
		WalkWays:                               requirements.WalkWays,
		Comfort_Rooms:                          requirements.ComfortRooms,
		Drinking_Fountains:                     requirements.DrinkingFountains,
		Swtches_Controls:                       requirements.Swtches_Controls,
		Telephone_Booth:                        requirements.TelephoneBooth,
		Automatic_AlarmSystem:                  requirements.AutomaticAlarmSystem,
		Directional_Signs:                      requirements.DirectionalSigns,
		Reserved_Parking:                       requirements.ReservedParking,
		Wallbay_Sections:                       requirements.WallbaySections,
		Stairs_Interior_Exterior:               requirements.StairsInteriorExterior,
		Fire_Exit:                              requirements.FireExit,
		BuiltIn_Cabinets:                       requirements.BuiltInCabinets,
		Partitions:                             requirements.Partitions,
		Schedule_Doors_Windows:                 requirements.ScheduleDoorsWindows,
		Schedule_Finishes:                      requirements.ScheduleFinishes,
		Other_Architectural_Elements:           requirements.OtherArchitecturalElements,
		Space_Plan:                             requirements.SpacePlan,
		Architecture_Interior:                  requirements.ArchitectureInterior,
		Furniture_Funishing_Equipments:         requirements.FurnitureFunishingEquipments,
		Detail_Design_Architectural:            requirements.DetailDesignArchitectural,
		Plan_Layout_Interior:                   requirements.PlanLayoutInterior,
		Interior_Wall_Elevations:               requirements.InteriorWallElevations,
		Floor_Ceiling_WallPatterns_Details:     requirements.FloorCeilingWallPatternsDetails,
		List_Material_Used:                     requirements.ListMaterialUsed,
		Cost_Estimates:                         requirements.CostEstimates,
		Plans_Specific_Locations:               requirements.PlansSpecificLocations,
		Design_Accessibility_Facilities:        requirements.DesignAccessibilityFacilities,
		Plan_Evacuation_Route:                  requirements.PlanEvacuationRoute,
		Details_Windows_FireExits:              requirements.DetailsWindowsFireExits,
		Details_FireResistive_Vertical_Openings: requirements.DetailsFireResistiveVerticalOpenings,
		Details_FireResistive_Decorative_Materials: requirements.DetailsFireResistiveDecorativeMaterials,
	}

	result := sql.DB.Model(&Architectural_Requirements{}).Where("application_id = ?", requirements.ApplicationID).Updates(updateData)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (sql *SQL) CheckCivilRequirements(requirements *types.CivilRequirements) error {

	updateData := &Civil_Requirements{
		Site_Development_Plan: requirements.Site_Development_Plan,
		Foundation_Plans: requirements.Foundation_Plans,
		Roof_Floor_Framing_Plans: requirements.Roof_Floor_Framing_Plans,
		Details_Schedule_Civil_WorkElements: requirements.Details_Schedule_Civil_WorkElements,
		Structural_Analysis_Design: requirements.Structural_Analysis_Design,
		Boring_Load_Test: requirements.Boring_Load_Test,
		Seismic_Analysis: requirements.Seismic_Analysis,
	}

	result := sql.DB.Model(&Civil_Requirements{}).Where("application_id = ?", requirements.ApplicationID).Updates(updateData)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (sql *SQL) CheckElectricalRequirements(requirements *types.ElectricalRequirements) error {

	updateData := &Electrical_Requirements{
		Location_Site_Plan: requirements.Location_Site_Plan,
		Legend_Symbols: requirements.Legend_Symbols,
		General_Notes: requirements.General_Notes,
		Electrical_Layout: requirements.Electrical_Layout,
		Schedule_Loads: requirements.Schedule_Loads,
		Design_Analysis: requirements.Design_Analysis,
		One_Line_Diagram: requirements.One_Line_Diagram,
	}

	result := sql.DB.Model(&Electrical_Requirements{}).Where("application_id = ?", requirements.ApplicationID).Updates(updateData)
	if result.Error != nil {
		return result.Error
	}

	return nil
}



func (sql *SQL) CreateArchitecturalRequirements(applicationID int64) error {
	requirements := &Architectural_Requirements{
		ApplicationID: applicationID,
	}

	if result := sql.DB.Create(&requirements); result.Error != nil {
		return result.Error
	}

	return nil
}

func (sql *SQL) CreateCivilRequirements(applicationID int64) error {
	requirements := &Civil_Requirements{
		ApplicationID: applicationID,
	}

	if result := sql.DB.Create(&requirements); result.Error != nil {
		return result.Error
	}

	return nil
}

func (sql *SQL) CreateElectricalRequirements(applicationID int64) error {
	requirements := &Electrical_Requirements{
		ApplicationID: applicationID,
	}

	if result := sql.DB.Create(&requirements); result.Error != nil {
		return result.Error
	}

	return nil
}




// ----------------------INBOXES----------------------

func (sql *SQL) ApplicationInbox(user_id int64, applicantName string) error {

	message := fmt.Sprintf(`Dear %s,
We are writing to inform you that we received your login information for applying for a permit in the PTMS portal of Panabo City's Engineering Office. Your successful login indicates that you are now ready to proceed with the application process.
We appreciate your interest in applying for permits through PTMS. You may now continue the application process by following these steps:

1. Fill out the applicant information.
2. Print the application form.
3. Check the requirements based on what services you want to apply for and submit them to Panabo City's Engineering Office.
4. Wait for the add-on requirements from the administration.

Thank you for your attention to this matter.

Sincerely,
Panabo City Engineering's Issuance of Permit Section`, applicantName)

	inbox := &Inbox{
		Message: message,
		UserID: user_id,
	}

	if result := sql.DB.Create(&inbox); result.Error != nil {
		return result.Error
	}

	return nil
}


func (sql *SQL) DisapprovalInbox(user_id int64, disApprovalMessage string) error {

	message := disApprovalMessage

	inbox := &Inbox{
		Message: message,
		UserID: user_id,
	}

	if result := sql.DB.Create(&inbox); result.Error != nil {
		return result.Error
	}

	return nil
}




func (sql *SQL) FetchAllInboxes(userID int64) ([]*types.FormattedInbox, error) {
	var inboxes []*types.FormattedInbox

	var dbInboxes []*Inbox
	err := sql.DB.Table("inboxes").Where("user_id = ?", userID).Order("created_at DESC").Find(&dbInboxes).Error
	if err != nil {
		return nil, err
	}

	for _, inbox := range dbInboxes {
		formattedInbox := &types.FormattedInbox{
			ID:         inbox.ID,
			Message:    inbox.Message,
			Status: 	inbox.Status,	
			UserID:     inbox.UserID,
			TimeCreated:  inbox.CreatedAt.Local().Format("03:04 PM"), 
		}
		inboxes = append(inboxes, formattedInbox)
	}

	return inboxes, nil

}

func (sql *SQL) FetchInboxesToday(userID int64) ([]*types.FormattedInbox, error) {

	var inboxes []*types.FormattedInbox

	var dbInboxes []*Inbox
	todayStart := time.Now().Truncate(24 * time.Hour)
	todayEnd := todayStart.Add(24 * time.Hour).Add(-time.Second)

	err := sql.DB.Table("inboxes").Where("user_id = ? AND created_at >= ? AND created_at <= ?", userID, todayStart, todayEnd).Order("created_at DESC").Find(&dbInboxes).Error
	if err != nil {
		return nil, err
	}

	for _, inbox := range dbInboxes {
		formattedInbox := &types.FormattedInbox{
			ID:         inbox.ID,
			Message:    inbox.Message,
			UserID:     inbox.UserID,
			TimeCreated:  inbox.CreatedAt.Local().Format("03:04 PM"), 
		}
		inboxes = append(inboxes, formattedInbox)
	}

	return inboxes, nil
}


func (sql *SQL) FetchUnreadInboxes(userID int64) ([]*types.FormattedInbox, error) {

	var inboxes []*types.FormattedInbox

	var dbInboxes []*Inbox

	err := sql.DB.Table("inboxes").Where("status = 'unread' ").Order("created_at DESC").Find(&dbInboxes).Error
	if err != nil {
		return nil, err
	}

	for _, inbox := range dbInboxes {
		formattedInbox := &types.FormattedInbox{
			ID:         inbox.ID,
			Message:    inbox.Message,
			UserID:     inbox.UserID,
			TimeCreated:  inbox.CreatedAt.Local().Format("03:04 PM"), 
		}
		inboxes = append(inboxes, formattedInbox)
	}

	return inboxes, nil
}


func (sql *SQL) UpdateInboxStatus(inboxID int64) error {

	fmt.Println("inbox id in db: ", inboxID)

	result := sql.DB.Model(&Inbox{}).Where("id = ?", inboxID).Updates(&Inbox{
		Status: "read",
	})

	if result.Error != nil{
		return result.Error
	}

	return nil
}

func (sql *SQL) DeleteInbox(inbox_id string) error {

	if result := sql.DB.Delete(&Inbox{}, inbox_id); result.Error != nil {
		return result.Error
	}

	return nil
}



// ----------------------APPLICATIONS----------------------

func (sql *SQL) AddApplication(applicantInfo *types.ApplicantInfo) error {

	errorChan := make(chan error, 2)

	application := Application{
		ApplicationCode: 			"",
		ServiceType:				applicantInfo.ServiceType,
		FirstName: 					applicantInfo.FirstName,
		MiddleInitial: 				applicantInfo.MiddleInitial,
		LastName: 					applicantInfo.LastName,

		Barangay: 					applicantInfo.Barangay,
		Street: 					applicantInfo.Street,
		Municipality: 				applicantInfo.Municipality,
		ZipCode: 					applicantInfo.ZipCode,
		LocationForConsAndInstall: 	applicantInfo.LocationForConsAndInstall,

		FormOfOwnerShip: 			applicantInfo.FormOfOwnerShip,
		ConstructionOwnbyEnterprise: applicantInfo.ConstructionOwnbyEnterprise,

		TaxAccountNumber: 			applicantInfo.TaxAccountNumber,
		TelNumber: 					applicantInfo.TelNumber,
		TctNumber: 					applicantInfo.TctNumber,

		PermitType: 				applicantInfo.PermitType,
		Status: 					"Pending",
		Email:  					applicantInfo.Email,
		UserID: 					applicantInfo.UserID,

		ScopeType:           		applicantInfo.ScopeType,
		CharacterOfOccupancy: 		applicantInfo.CharacterOfOccupancy,

		AdminApproved: "",
	}

	if result := sql.DB.Create(&application); result.Error != nil {
		return result.Error
	}


	go func() {
        if err := sql.CreateAssessments(application.ID); err != nil {
            errorChan <- err
        }
    }()

	go func() {
        if err := sql.CreateFirstStepRequirements(application.ID); err != nil {
            errorChan <- err
        }
    }()

	var err error
	for i := 0; i < 3; i++ {
		if e := <-errorChan; e != nil {
			err = e
		}
	}
	close(errorChan)

	if err != nil {
		return err
	}

	return nil
}


func (sql *SQL) FetchApplication(status string, searchName string, selectedMonth string, selectedWeek string) ([]*types.ApplicantInfoFetching, error) {

	var results []*types.ApplicantInfoFetching


	query := sql.DB.Table("applications").
		Select(`applications.id, applications.service_type, applications.application_code, applications.first_name, applications.middle_initial, applications.last_name, 
		applications.barangay, applications.street, applications.municipality, applications.zip_code, applications.location_for_cons_and_install, applications.form_of_owner_ship, 
		applications.construction_ownby_enterprise, applications.tax_account_number, applications.tel_number, applications.tct_number, applications.permit_type, 
		applications.email, applications.admin_approved, applications.user_id, assessments.id, assessments.status`).

		Joins("INNER JOIN assessments ON applications.id = assessments.application_id").
		Where("applications.status = ?", status).
		Order("applications.created_at DESC")


	if searchName != "" {
		searchName = "%" + searchName + "%"
		query = query.Where("CONCAT(applications.first_name, ' ', applications.middle_initial, ' ', applications.last_name) ILIKE ?", searchName)
	}

	if selectedMonth != "" {
		query = query.Where("TO_CHAR(applications.created_at, 'Month') = ?", selectedMonth)
	}

	if selectedWeek != "" {
		weeksAgo, err := parseWeeksAgo(selectedWeek)
		if err == nil {
			endDate := time.Now().AddDate(0, 0, -7*weeksAgo)
			endDate = time.Date(endDate.Year(), endDate.Month(), endDate.Day(), 23, 59, 59, 999999999, endDate.Location())
			startDate := endDate.AddDate(0, 0, -6) // Cover the full 7 days
			startDate = time.Date(startDate.Year(), startDate.Month(), startDate.Day(), 0, 0, 0, 0, startDate.Location())
			query = query.Where("applications.created_at BETWEEN ? AND ?", startDate, endDate)
		}
	}

	if err := query.Find(&results).Error; err != nil {
		return nil, err
	}

	go func() {
		if err := sql.AllAdminsApplicationApproval(results); err != nil {
			fmt.Printf("Error updating admin approvals: %v\n", err)
		}
	}()


	return results, nil
}



func (sql *SQL) AllAdminsApplicationApproval(results []*types.ApplicantInfoFetching) error {

	for _, application := range results {
		approvedAdmins := strings.Split(application.AdminApproved, ",")
		requiredAdmins := []string{"architectural", "civil", "electrical"}
	
		allApproved := true
		for _, required := range requiredAdmins {
			if !contains(approvedAdmins, required) {
				allApproved = false
				break
			}
		}
	
		if allApproved {
			// Update the application status to "Approved"
			approvalResult := sql.DB.Model(&Application{}).Where("id = ?", application.ID).Updates(&Application{
				Status: "Approved",
			})
	
			if approvalResult.Error != nil {
				return approvalResult.Error
			}
		}
	
	}

	return nil

	
}


func (sql *SQL) UpdateApplicationApproval(applicationID int64, adminApproved string) error {


    var currentApplication types.UpdateApplicationApproval
    err := sql.DB.Table("applications").Where("id = ?", applicationID).First(&currentApplication).Error
    if err != nil {
        return err
    }


    if currentApplication.AdminApproved != "" {
        currentApplication.AdminApproved += "," + adminApproved
    } else {
        currentApplication.AdminApproved = adminApproved
    }

    result := sql.DB.Model(&Application{}).Where("id = ?", applicationID).Updates(&Application{
        AdminApproved: currentApplication.AdminApproved,
    })

    if result.Error != nil {
        return result.Error
    }

    return nil
}


func (sql *SQL) UpdateApplicationDisApproval(applicationID int64, disapprovalMessage string) error {

	fmt.Println("applicationID: ", applicationID)
	fmt.Println("disapprovalMessage: ", disapprovalMessage)

    result := sql.DB.Model(&Application{}).Where("id = ?", applicationID).Updates(&Application{
        Status: "Disapproved",
    })

    if result.Error != nil {
        return result.Error
    }

    return nil
}

func contains(slice []string, item string) bool {
    for _, s := range slice {
        if s == item {
            return true
        }
    }
    return false
}



func parseWeeksAgo(selectedWeek string) (int, error) {
	var weeksAgo int
	_, err := fmt.Sscanf(selectedWeek, "%d week", &weeksAgo) // Extract the week number
	return weeksAgo, err
}



func (sql *SQL) FetchAppliedServices(user_id int64) ([]*types.AppliedServicesFetching, error) {

	var appliedServices []*types.AppliedServicesFetching

	if err := sql.DB.Table("applications").
		Select("applications.id, applications.service_type, applications.application_code, applications.first_name, applications.middle_initial, applications.last_name, applications.barangay, applications.street, applications.municipality, applications.zip_code, applications.location_for_cons_and_install, applications.form_of_owner_ship, applications.construction_ownby_enterprise, applications.tax_account_number, applications.tel_number, applications.tct_number, applications.permit_type, applications.status, applications.scope_type, applications.character_of_occupancy").
		Joins("INNER JOIN users ON applications.user_id = users.id").
		Where("applications.user_id = ?", user_id).
		Order("applications.created_at DESC").
		Find(&appliedServices).Error; err != nil {
		return nil, err
	}


	return appliedServices, nil
}





func (sql *SQL) UpdateApplicationCode(applicationID int64, applicationCode string) error {

	if err := sql.BuildAdminsRequirements(applicationID); err != nil{
		return err
	}

	result := sql.DB.Model(&Application{}).Where("id = ?", applicationID).Updates(&Application{
		ApplicationCode: applicationCode,
		Status: "Paid",
	})

	if result.Error != nil{
		return result.Error
	}

	return nil
}






func (sql *SQL) UpdateApplicationStatus(applicationID int64, status string) error {

	errorChan := make(chan error, 3)

	go func() {
		if err := sql.CreateArchitecturalRequirements(applicationID); err != nil{
			errorChan <- err
		}
	}()
	
	go func() {
		if err := sql.CreateCivilRequirements(applicationID); err != nil{
			errorChan <- err
		}
	}()
	
	go func() {
		if err := sql.CreateElectricalRequirements(applicationID); err != nil{
			errorChan <- err
		}
	}()

	var err error
	for i := 0; i < 3; i++ {
		if e := <-errorChan; e != nil {
			err = e
		}
	}
	close(errorChan)

	if err != nil {
		return err
	}

	result := sql.DB.Model(&Application{}).Where("id = ?", applicationID).Updates(&Application{
		Status: status,
	})

	if result.Error != nil{
		return result.Error
	}

	return nil
}
