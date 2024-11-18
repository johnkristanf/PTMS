export type AccessRoleTypes = {
    role: string,
    user_id: number,
    access_role: string,
}

export type FetchPendingAccessRequestTypes = {
    id: number,
    role: string,
    access_role: string
}


export type UpdateRequestAccessStatusTypes = {
    id: number,
    status: string
}