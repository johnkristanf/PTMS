import { createBrowserRouter } from "react-router-dom";
import { loginPath, root, adminPagePath, applyNewServicesPath, pendingApplicationPath, approvedArchitecturalPath, staffApprovedApplicationPath, disapprovedArchitecturalPath, servicesPath, staffAccountArchitecturalPath, unauthorizedPath, paidArchitecturalPath, inboxPath, applyPath, staffPagePath, scannerApprovedPath, scannerReportPath, releasePath, editReceiverAccountPath, editReleaserAccountPath, editScannerAccountPath, paidCivilPath, disapprovedCivilPath, staffAccountCivilPath, approvedCivilPath, paidElectricalPath, disapprovedElectricalPath, staffAccountElectricalPath, approvedElectricalPath, releaserDisapprovedPath, applicationReleaserPath, retiredApplicationPath } from "./paths";

const routes = [
    root,
    loginPath,
    applyPath,

    adminPagePath,

    paidArchitecturalPath,
    disapprovedArchitecturalPath,
    approvedArchitecturalPath,
    staffAccountArchitecturalPath,


    paidCivilPath,
    disapprovedCivilPath,
    approvedCivilPath,
    staffAccountCivilPath,


    paidElectricalPath,
    disapprovedElectricalPath,
    approvedElectricalPath,
    staffAccountElectricalPath,


    applyNewServicesPath,
    servicesPath,
    inboxPath,

    staffPagePath,
    pendingApplicationPath,
    staffApprovedApplicationPath,
    scannerApprovedPath,
    scannerReportPath,

    releasePath,
    releaserDisapprovedPath,
    applicationReleaserPath,
    retiredApplicationPath,

    editReceiverAccountPath,
    editReleaserAccountPath,
    editScannerAccountPath,

    unauthorizedPath
]

export const ROUTER = createBrowserRouter(routes)