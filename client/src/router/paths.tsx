import { Navigate } from "react-router-dom"
import { FetchAdminAccount } from "../http/get/auth"

import QueryProviderWrapper from "../components/QueryProvider"

import LandingPage from "../pages/Landing"

import ServicesPage from "../pages/applicant/AppliedServicesTable"
import ApplyServicesPage from "../pages/applicant/ApplyServices"

import ApprovedApplicationPage from "../pages/staff/receiver/Approved"


import UnauthorizedPage from "../pages/Unauthorized"
import AdminTypesPage from "../pages/admin/AdminTypes"
import InboxPage from "../pages/applicant/Inbox"
import ApplyButtonPage from "../pages/applicant/Apply"
import StaffTypesPage from "../pages/staff/StaffTypes"
import ScannerPage from "../pages/staff/scanner/ApprovedScanner"
import ReleaserPage from "../pages/staff/releaser/ApprovedReleaser"
import ReceiverPage from "../pages/staff/receiver/PendingReceiver"

import EditReleaserAccountPage from "../pages/staff/releaser/EditReleaser"
import EditReceiverAccountPage from "../pages/staff/receiver/EditReceiver"
import EditScannerAccountPage from "../pages/staff/scanner/EditScanner"
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
import DisapprovedReleaserPage from "../pages/staff/releaser/DisapprovedReleaser"
import ApplicationReleaserPage from "../pages/staff/releaser/ApplicationReleaser"
import TrashApplicationReceiverPage from "../pages/staff/receiver/TrashApplicationReceiver"
import TrashApplicationArhictecturalPage from "../pages/admin/architectural/TrashApplicationArchitectural"
import TrashApplicationElectricalPage from "../pages/admin/electrical/TrashApplicationElectrical"
import TrashApplicationCivilPage from "../pages/admin/civil/TrashApplicationCivil"
import ReleaserReportPage from "../pages/staff/releaser/ReleaserReport"
import EmailVerification from "../pages/reset_password/EmailVerification"
import ResetPassword from "../pages/reset_password/ResetPassword"
import ArchitecturalDashboardPage from "../pages/admin/architectural/DashboardArchitectural"
import CivilDashboardPage from "../pages/admin/civil/DashboardCivil"
import ElectricalDashboardPage from "../pages/admin/electrical/DashboardElectrical"
import ActivationPage from "@/pages/applicant/Activation"



// ang purpose sa loader which katulong argument sa path obj diri is mag serve
// ditso data before rendering the component
// sample get func axios req for user login


// -------------- RESET PASSWORD ------------------
export const emailVerificationPath = {
    path: "/email/verify",
    element: <EmailVerification />
}

export const resetPasswordPath = {
    path: "/reset/password",
    element: <ResetPassword />
}

export const activationPath = {
    path: "/activate",
    element: <ActivationPage />
}

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

export const architecturalDashboardPath = {
    path: "/architectural/dashboard",
    element:(
        <QueryProviderWrapper>
            <ArchitecturalDashboardPage />
        </QueryProviderWrapper>
    ),
}


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

export const trashApplicationArchitecturalPath = {
    path: "/architectural/trash/applications",
    element:(
        <QueryProviderWrapper>
            <TrashApplicationArhictecturalPage />
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

export const civilDashboardPath = {
    path: "/civil/dashboard",
    element:(
        <QueryProviderWrapper>
            <CivilDashboardPage />
        </QueryProviderWrapper>
    ),
}

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

export const trashApplicationCivilPath = {
    path: "/civil/trash/applications",
    element:(
        <QueryProviderWrapper>
            <TrashApplicationCivilPage />
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

export const electricalDashboardPath = {
    path: "/electrical/dashboard",
    element:(
        <QueryProviderWrapper>
            <ElectricalDashboardPage />
        </QueryProviderWrapper>
    ),
}

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

export const trashApplicationElectricalPath = {
    path: "/electrical/trash/applications",
    element:(
        <QueryProviderWrapper>
            <TrashApplicationElectricalPage />
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

export const trashApplicationReceiverPath = {
    path: "/receiver/trash/applications",
    element:(
        <QueryProviderWrapper>
            <TrashApplicationReceiverPage />
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

export const releaserReportPath = {
    path: "/releaser/report",
    element:(
        <QueryProviderWrapper>
            <ReleaserReportPage />
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



