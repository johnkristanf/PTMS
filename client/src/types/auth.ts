
export type LoginCredentials = {
    email: string,
    password: string
}

export type LoginRole = {
    admin: boolean,
    staff: boolean
}


export type StaffAccount = {
    name: string,
    email: string,
    role: string,
    password: string
}

export type StaffAccountFetch = {
    id: number
    name: string,
    email: string,
    role: string
}

export type LoginAccount = {
    id: number,
    name: string,
    role: string,
    adminType?: string,
    picture: string
}

export type EditStaffAccountType = { 
    staff_id: number
    name: string, 
    email: string, 
    old_password: string, 
    new_password: string 
}