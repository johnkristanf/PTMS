package types


type AccessRole struct {
	Role     	    string  `json:"role"`
	UserID 		    int64   `json:"user_id"`
	AccessRole      string  `json:"access_role"`
	IsAdmin			bool	`json:"isAdmin"`
}

type OpenGrantedStaffPage struct {
	AccessRole      string  `json:"access_role"`
}


type UpdateAccessStatus struct {
	Status	string `json:"status"`
}

type FetchPendingRequestAccess struct {
	ID     	        int64 		`json:"id"`
	Role 		    string   	`json:"role"`
	AccessRole      string 		`json:"access_role"`
}


type FetchAdminRequestAccess struct {
	ID     	        int64 		`json:"id"`
	Role 		    string   	`json:"role"`
	AccessRole      string 		`json:"access_role"`
	Status 		    string   	`json:"status"`
	UserID 		    int64   	`json:"user_id"`
}

type FetchStaffAccessRequests struct {
	ID     	        int64 		`json:"id"`
	Status 		    string   	`json:"status"`
	AccessRole      string 		`json:"access_role"`
}