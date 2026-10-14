import type { JobApplication } from "../types/application";

//----------------------------END OF IMPORTS-----------------------------------------------//

const STORAGE_KEY = "jobApplications";

export function getApplications(): JobApplication[] | null {
  const savedApplications = localStorage.getItem(STORAGE_KEY);

  if (savedApplications === null) {
    return null;
  }

  return JSON.parse(savedApplications);
}

export function saveApplications(
  applications: JobApplication[]
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(applications)
  );
}