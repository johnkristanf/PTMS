package types


type StaffAccessRole struct {
	Role     	    string `json:"role"`
	UserID 		    int64 `json:"user_id"`
	AccessRole      string `json:"access_role"`

}

type UpdateAccessStatus struct {
	Status	string `json:"status"`
}

type FetchPendingRequestAccess struct {
	ID     	        int64 		`json:"id"`
	Role 		    string   	`json:"role"`
	AccessRole      string 		`json:"access_role"`

}