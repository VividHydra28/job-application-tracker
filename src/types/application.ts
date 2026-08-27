
// This obj defines the types.
export type ApplicationStatus =
  | "Applied"
  | "Screening"
  | "Interview"
  | "Offer"
  | "Rejected"
  | "Withdrawn";

// This type defines the format of a date string in the format "YYYY-MM-DD".
//export type ApplicationDate = `${number}-${number}-${number}`;

// This interface defines the structure of a job application object.
export interface JobApplication {
  id: string;
  company: string;
  position: string;
  location: string;
  status: ApplicationStatus;
  dateApplied: string; //used to be a string
  jobUrl?: string;
  salary?: string;
  notes?: string;
}