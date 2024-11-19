export type AccessRoleTypes = {
    role: string,
    user_id: number,
    access_role: string,
    isAdmin: boolean
}

export type FetchPendingAccessRequestTypes = {
    id: number,
    role: string,
    access_role: string
    status: string
    user_id: number
}

export type FetchStaffAccessRequestsTypes = {
    id: number;
    status: string,
    access_role: string
}

export type UpdateRequestAccessStatusTypes = {
    id: number,
    status: string
}