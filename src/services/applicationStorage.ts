import type { JobApplication } from "../types/application";

const STORAGE_KEY = "jobApplications";

export function getApplications(): JobApplication[] {
  const savedApplications = localStorage.getItem(STORAGE_KEY);

  if (!savedApplications) {
    return [];
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