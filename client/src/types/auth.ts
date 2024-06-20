
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