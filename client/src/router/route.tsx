import { createBrowserRouter } from "react-router-dom";
import { loginPath, root, adminPagePath, applyNewServicesPath, pendingApplicationPath, approvedArchitecturalPath, staffApprovedApplicationPath, disapprovedArchitecturalPath, servicesPath, staffAccountArchitecturalPath, unauthorizedPath, paidArchitecturalPath, inboxPath, applyPath, staffPagePath, scannerApprovedPath, scannerReportPath, releasePath, editReceiverAccountPath, editReleaserAccountPath, editScannerAccountPath, paidCivilPath, disapprovedCivilPath, staffAccountCivilPath, approvedCivilPath, paidElectricalPath, disapprovedElectricalPath, staffAccountElectricalPath, approvedElectricalPath, releaserDisapprovedPath, applicationReleaserPath, trashApplicationArchitecturalPath, trashApplicationElectricalPath, trashApplicationReceiverPath, trashApplicationCivilPath } from "./paths";

const routes = [
    root,
    loginPath,
    applyPath,

    adminPagePath,

    paidArchitecturalPath,
    trashApplicationArchitecturalPath,
    disapprovedArchitecturalPath,
    approvedArchitecturalPath,
    staffAccountArchitecturalPath,


    paidCivilPath,
    disapprovedCivilPath,
    trashApplicationCivilPath,
    approvedCivilPath,
    staffAccountCivilPath,


    paidElectricalPath,
    disapprovedElectricalPath,
    approvedElectricalPath,
    trashApplicationElectricalPath,
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
    trashApplicationReceiverPath,

    editReceiverAccountPath,
    editReleaserAccountPath,
    editScannerAccountPath,

    unauthorizedPath
]

export const ROUTER = createBrowserRouter(routes)