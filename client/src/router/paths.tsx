import { Navigate } from "react-router-dom"
import { FetchAdminAccount } from "../http/get/auth"

import QueryProviderWrapper from "../components/QueryProvider"

import LandingPage from "../pages/Landing"

import ServicesPage from "../pages/applicant/AppliedServicesTable"
import ApplyServicesPage from "../pages/applicant/ApplyServices"

import ApprovedApplicationPage from "../pages/staff/receiver/Approved"
import DisapprovedApplicationPage from "../pages/admin/architectural/DisapprovedArchitectural"


import PaidApplicationsPage from "../pages/admin/architectural/PaidArchitectural"
import StaffAccountPage from "../pages/admin/architectural/StaffAccountArchitectural"
import UnauthorizedPage from "../pages/Unauthorized"
import AdminTypesPage from "../pages/admin/AdminTypes"
import AdminApprovedApplicationPage from "../pages/admin/architectural/ApprovedArchitectural"
import InboxPage from "../pages/applicant/Inbox"
import ApplyButtonPage from "../pages/applicant/Apply"
import StaffTypesPage from "../pages/staff/StaffTypes"
import ScannerPage from "../pages/staff/scanner/ApprovedScanner"
import ReleaserPage from "../pages/staff/releaser/ApprovedReleaser"
import ReceiverPage from "../pages/staff/receiver/PendingReceiver"

import EditReleaserAccountPage from "../pages/staff/releaser/EditReleaser"
import EditReceiverAccountPage from "../pages/staff/receiver/EditReceiver"
import EditScannerAccountPage from "../pages/staff/scanner/EditScanner"
import ScannerReportPage from "../pages/staff/scanner/Report"
import PaidArchitecturalPage from "../pages/admin/architectural/PaidArchitectural"
import ApprovedArchitecturalPage from "../pages/admin/architectural/ApprovedArchitectural"
import DisapprovedArchitecturalPage from "../pages/admin/architectural/DisapprovedArchitectural"
import StaffAccountsArchitecturalPage from "../pages/admin/architectural/StaffAccountArchitectural"
import PaidCivilPage from "../pages/admin/civil/PaidCivill"
import ApprovedCivilPage from "../pages/admin/civil/ApprovedCivil"
import DisapprovedCivilPage from "../pages/admin/civil/DisapprovedCivil"
import StaffAccountsCivilPage from "../pages/admin/civil/StaffAccountCivil"
import PaidElectricalPage from "../pages/admin/electrical/PaidElectrical"
import ApprovedElectricalPage from "../pages/admin/electrical/ApprovedElectrical"
import DisapprovedElectricalPage from "../pages/admin/electrical/DisapprovedElectrical"
import StaffAccountsElectricalPage from "../pages/admin/electrical/StaffAccountElectrical"
import DisapprovedReleaserPage from "../pages/staff/releaser/Disapproved"
import ApplicationReleaserPage from "../pages/staff/releaser/Application"
import RetiredApplicationPage from "../pages/staff/receiver/RetiredApplication"



// ang purpose sa loader which katulong argument sa path obj diri is mag serve
// ditso data before rendering the component
// sample get func axios req for user login

export const root = {
    path: "/",
    element: <Navigate to="/login" />
}

export const loginPath = {
    path: "/login",
    element: <LandingPage />
}


// --------------APPLICANT ------------------
export const applyPath = {
    path: "/apply",
    element:(
        <QueryProviderWrapper>
            <ApplyButtonPage />
        </QueryProviderWrapper>
    ),
}


export const servicesPath = {
    path: "/applied/services",
    element:(
        <QueryProviderWrapper>
            <ServicesPage />
        </QueryProviderWrapper>
    ),
}

export const applyNewServicesPath = {
    path: "/services/option",
    element:(
        <QueryProviderWrapper>
            <ApplyServicesPage />
        </QueryProviderWrapper>
    ),
}

export const inboxPath = {
    path: "/inbox",
    element:(
        <QueryProviderWrapper>
            <InboxPage />
        </QueryProviderWrapper>
    ),
}


// --------------ADMIN -----------------------
export const adminPagePath = {
    path: "/select/admin",
    element:(
        <QueryProviderWrapper>
            <AdminTypesPage />
        </QueryProviderWrapper>
    ),
    loader: async () => {
        return FetchAdminAccount();
    }
}


// ------------ ARCHITECTURAL --------------
export const paidArchitecturalPath = {
    path: "/architectural/paid/applications",
    element:(
        <QueryProviderWrapper>
            <PaidArchitecturalPage />
        </QueryProviderWrapper>
    ),
}

export const approvedArchitecturalPath = {
    path: "/architectural/approved/applications",
    element:(
        <QueryProviderWrapper>
            <ApprovedArchitecturalPage />
        </QueryProviderWrapper>
    ),
}


export const disapprovedArchitecturalPath = {
    path: "/architectural/disapproved/applications",
    element:(
        <QueryProviderWrapper>
            <DisapprovedArchitecturalPage />
        </QueryProviderWrapper>
    ),
}

export const staffAccountArchitecturalPath = {
    path: "/architectural/staff/accounts",
    element:(
        <QueryProviderWrapper>
            <StaffAccountsArchitecturalPage />
        </QueryProviderWrapper>
    ), 

    loader: async () => {
        return FetchAdminAccount();
    }
}

// ------------ END OF ARCHITECTURAL --------------



// ------------ CIVIL --------------

export const paidCivilPath = {
    path: "/civil/paid/applications",
    element:(
        <QueryProviderWrapper>
            <PaidCivilPage />
        </QueryProviderWrapper>
    ),
}

export const approvedCivilPath = {
    path: "/civil/approved/applications",
    element:(
        <QueryProviderWrapper>
            <ApprovedCivilPage />
        </QueryProviderWrapper>
    ),
}


export const disapprovedCivilPath = {
    path: "/civil/disapproved/applications",
    element:(
        <QueryProviderWrapper>
            <DisapprovedCivilPage />
        </QueryProviderWrapper>
    ),
}

export const staffAccountCivilPath = {
    path: "/civil/staff/accounts",
    element:(
        <QueryProviderWrapper>
            <StaffAccountsCivilPage />
        </QueryProviderWrapper>
    ), 

    loader: async () => {
        return FetchAdminAccount();
    }
}

// ------------ END OF CIVIL --------------


// ------------ ELECTRICAL --------------

export const paidElectricalPath = {
    path: "/electrical/paid/applications",
    element:(
        <QueryProviderWrapper>
            <PaidElectricalPage />
        </QueryProviderWrapper>
    ),
}

export const approvedElectricalPath = {
    path: "/electrical/approved/applications",
    element:(
        <QueryProviderWrapper>
            <ApprovedElectricalPage />
        </QueryProviderWrapper>
    ),
}


export const disapprovedElectricalPath = {
    path: "/electrical/disapproved/applications",
    element:(
        <QueryProviderWrapper>
            <DisapprovedElectricalPage />
        </QueryProviderWrapper>
    ),
}

export const staffAccountElectricalPath = {
    path: "/electrical/staff/accounts",
    element:(
        <QueryProviderWrapper>
            <StaffAccountsElectricalPage />
        </QueryProviderWrapper>
    ), 

    loader: async () => {
        return FetchAdminAccount();
    }
}

// ------------ END OF ELECTRICAL --------------



// --------------- STAFF----------------------

export const staffPagePath = {
    path: "/select/staff",
    element:(
        <QueryProviderWrapper>
            <StaffTypesPage />
        </QueryProviderWrapper>
    ),
}

export const staffApprovedApplicationPath = {
    path: "/staff/approved/applications",
    element:(
        <QueryProviderWrapper>
            <ApprovedApplicationPage />
        </QueryProviderWrapper>
    ),
}



// --------------- RECEIVER----------------------


export const pendingApplicationPath = {
    path: "/receiver/pending/applications",
    element:(
        <QueryProviderWrapper>
            <ReceiverPage />
        </QueryProviderWrapper>
    ),
}

export const retiredApplicationPath = {
    path: "/receiver/retired/applications",
    element:(
        <QueryProviderWrapper>
            <RetiredApplicationPage />
        </QueryProviderWrapper>
    ),
}



export const editReceiverAccountPath = {
    path: "/edit/receiver",
    element:(
        <QueryProviderWrapper>
            <EditReceiverAccountPage />
        </QueryProviderWrapper>
    ),
}



// --------------- SCANNER----------------------

export const scannerApprovedPath = {
    path: "/scanner/approved",
    element:(
        <QueryProviderWrapper>
            <ScannerPage />
        </QueryProviderWrapper>
    ),
}

export const scannerReportPath = {
    path: "/scanner/report",
    element:(
        <QueryProviderWrapper>
            <ScannerReportPage />
        </QueryProviderWrapper>
    ),
}

export const editScannerAccountPath = {
    path: "/edit/scanner",
    element:(
        <QueryProviderWrapper>
            <EditScannerAccountPage />
        </QueryProviderWrapper>
    ),
}


// --------------- RELEASER----------------------

export const releasePath = {
    path: "/releaser/approved",
    element:(
        <QueryProviderWrapper>
            <ReleaserPage />
        </QueryProviderWrapper>
    ),
}

export const releaserDisapprovedPath = {
    path: "/releaser/disapproved",
    element:(
        <QueryProviderWrapper>
            <DisapprovedReleaserPage />
        </QueryProviderWrapper>
    ),
}


export const applicationReleaserPath = {
    path: "/releaser/application",
    element:(
        <QueryProviderWrapper>
            <ApplicationReleaserPage />
        </QueryProviderWrapper>
    ),
}


export const editReleaserAccountPath = {
    path: "/edit/releaser",
    element:(
        <QueryProviderWrapper>
            <EditReleaserAccountPage />
        </QueryProviderWrapper>
    ),
}

// --------------- UNAUTHORIZED----------------------
export const unauthorizedPath = {
    path: "/unauthorized",
    element: <UnauthorizedPage />
}



