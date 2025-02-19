/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function generateScopeAndOccupancyOptions(selectedService: string) {
  const scopeOptions = [];
  const occupancyOptions = [];

  const buildingPermitScopeOptions = [
    "Building", "Building-NEW CONSTRUCTION", "Building-ERECTION", "Building-ADDITION",
    "Building-ALTERATION", "Building-RENOVATION", "Building-CONVERSION", "Building-REPAIR",
    "Building-MOVING", "Building-RAISING", "Building-ACCESSORY BUILDING/STRUCTURE"
  ];

  const buildingPermitOccupancyOptions = [
      "Building",
      "Building-GROUP A - RESIDENTIAL DWELLING",
      "Building-GROUP B - RESIDENTIAL HOTEL APARTMENT",
      "Building-GROUP C - EDUCATIONAL RECREATIONAL",
      "Building-GROUP D - INSTITUTIONAL",
      "Building-GROUP E - BUSINESS AND MERCANTILE",
      "Building-GROUP F - INDUSTRIAL",
      "Building-GROUP G - INDUSTRIAL STORAGE AND HAZARDOUS",
      "Building-GROUP H - RECREATIONAL ASSEMBLY OCCUPANT LOAD LESS THAN 1000",
      "Building-GROUP I - RECREATIONAL ASSEMBLY OCCUPANT LOAD 1000 OR MORE",
      "Building-GROUP J - AGRICULTURAL ACCESSORY"
  ];

  const electricalPermitScopeOptions = [
      "Electrical", "Electrical-NEW INSTALLATION", "Electrical-ANNUAL INSPECTION",
      "Electrical-ADDITION OF", "Electrical-REPAIR OF", "Electrical-REMOVAL"
  ];

  const electricalPermitOccupancyOptions = [
      "Electrical",
      "Electrical-A. RESIDENTIAL DWELLING",
      "Electrical-B. RESIDENTIAL HOTEL APARTMENT",
      "Electrical-C. EDUCATION AND RECREATION",
      "Electrical-D. INSTITUTIONAL",
      "Electrical-E. BUSINESS & MERCANTILE",
      "Electrical-F. INDUSTRIAL",
      "Electrical-G. STORAGE & HAZARDOUS",
      "Electrical-H. ASSEMBLY OTHER THAN GROUP",
      "Electrical-I. ASSEMBLY OCCUPANT LOAD 100 OR MORE",
      "Electrical-J. ACCESSORY"
  ];

  const plumbingPermitScopeOptions = [
      "Plumbing", "Plumbing-NEW CONSTRUCTION", "Plumbing-ERECTION", "Plumbing-ADDITION",
      "Plumbing-ALTERATION", "Plumbing-RENOVATION", "Plumbing-CONVERSION", "Plumbing-REPAIR",
      "Plumbing-MOVING", "Plumbing-RAISING", "Plumbing-DEMOLITION", "Plumbing-ACCESSORY BUILDING/STRUCTURE"
  ];

  const plumbingPermitOccupancyOptions = [
      "Plumbing", "Plumbing-Residential", "Plumbing-Commercial", "Plumbing-Industrial",
      "Plumbing-Institutional", "Plumbing-Agricultural", "Plumbing-Parks, Plazas, Monuments",
      "Plumbing-Recreational", 
  ];

  const mechanicalPermitScopeOptions = [
      "Mechanical", "Mechanical-NEW CONSTRUCTION", "Mechanical-ERECTION", "Mechanical-ADDITION",
      "Mechanical-ALTERATION", "Mechanical-RENOVATION", "Mechanical-CONVERSION", "Mechanical-REPAIR",
      "Mechanical-MOVING", "Mechanical-RAISING", "Mechanical-DEMOLITION", "Mechanical-ACCESSORY BUILDING/STRUCTURE"
  ];

  const mechanicalPermitOccupancyOptions = [
      "Mechanical", "Mechanical-RESIDENTIAL", "Mechanical-COMMERCIAL", "Mechanical-INDUSTRIAL",
      "Mechanical-INSTITUTIONAL", "Mechanical-AGRICULTURAL", "Mechanical-LANDSCAPING"
  ];

  const electronicsPermitScopeOptions = [
      "Electronics", "Electronics-NEW INSTALLATION", "Electronics-ANNUAL INSPECTION"
  ];

  const fencingPermitScopeOptions = [
      "Fencing", "Fencing-NEW CONSTRUCTION", "Fencing-ERECTION", "Fencing-ADDITION",
      "Fencing-REPAIR", "Fencing-DEMOLITION"
  ];

  const excavationPermitScopeOptions = [
      "Excavation", "Excavation-NEW CONSTRUCTION", "Excavation-ERECTION", "Excavation-ADDITION",
      "Excavation-REPAIR", "Excavation-DEMOLITION"
  ];

  const excavationPermitOccupancyOptions = [
      "Excavation",
      "Excavation-GROUP A RESIDENTIAL DWELLINGS",
      "Excavation-GROUP B RESIDENTIAL HOTEL APARTMENT",
      "Excavation-GROUP C EDUCATIONAL RECREATIONAL",
      "Excavation-GROUP D INSTITUTIONAL",
      "Excavation-GROUP E BUSINESS AND MERCANTILE",
      "Excavation-GROUP F INDUSTRIAL",
      "Excavation-GROUP G INDUSTRIAL STORAGE AND HAZARDOUS",
      "Excavation-GROUP H RECREATIONAL ASSEMBLY OCCUPANT LOAD LESS THAN 1000",
      "Excavation-GROUP I RECREATIONAL ASSEMBLY OCCUPANT LOAD 1000 OR MORE",
      "Excavation-GROUP J AGRICULTURAL ACCESSORY"
  ];


    if (selectedService === "Building") {
        scopeOptions.push(
            ...buildingPermitScopeOptions,
            ...electricalPermitScopeOptions,
            ...plumbingPermitScopeOptions,
            ...mechanicalPermitScopeOptions,
            ...electronicsPermitScopeOptions,
            ...fencingPermitScopeOptions,
            ...excavationPermitScopeOptions
        );

        occupancyOptions.push(
            ...buildingPermitOccupancyOptions,
            ...electricalPermitOccupancyOptions,
            ...plumbingPermitOccupancyOptions,
            ...mechanicalPermitOccupancyOptions,
            ...excavationPermitOccupancyOptions
        );
    }

    if (selectedService === "Electrical") {
        scopeOptions.push(
            ...electricalPermitScopeOptions,
        );

        occupancyOptions.push(
            ...electricalPermitOccupancyOptions,
        );
    }


    if (selectedService === "Plumbing") {
        scopeOptions.push(
            ...plumbingPermitScopeOptions,
        );

        occupancyOptions.push(
            ...plumbingPermitOccupancyOptions,
        );
    }

    if (selectedService === "Mechanical") {
        scopeOptions.push(
            ...mechanicalPermitScopeOptions,
        );

        occupancyOptions.push(
            ...mechanicalPermitOccupancyOptions,
        );
    }

    if (selectedService === "Electronics") {
        scopeOptions.push(
            ...electronicsPermitScopeOptions,
        );

    }

    if (selectedService === "Fencing") {
        scopeOptions.push(
            ...fencingPermitScopeOptions,
        );

    }

    if (selectedService === "Excavation") {
        scopeOptions.push(
            ...excavationPermitScopeOptions,
        );

        occupancyOptions.push(
            ...excavationPermitOccupancyOptions,
        );

    }


  return {
    scopeOptions: scopeOptions,
    occupancyOptions: occupancyOptions,

  }
}



export const groupByClass = (data: string[]) => {
  const grouped: any = {};
  let currentClass = "";

  data.forEach((item) => {
      if (["Building", "Electrical", "Plumbing", "Mechanical", "Electronics", "Fencing", "Excavation"].includes(item)) {
          currentClass = item;
          grouped[currentClass] = [];
      } else {
          grouped[currentClass]?.push(item);
      }
  });

  return grouped;
};