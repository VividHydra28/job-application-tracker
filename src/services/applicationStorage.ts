import type { JobApplication } from "../types/application";

const STORAGE_KEY = "jobApplications";

export function getApplications(): JobApplication[] | null {
  const savedApplications = localStorage.getItem(STORAGE_KEY);

  if (savedApplications === null) {
    return null;
  }

  try {
    return JSON.parse(savedApplications);
  } catch (error) {
    console.error(
      "Failed to load applications from LocalStorage:",
      error
    );

    return null;
  }
}

export function saveApplications(
  applications: JobApplication[]
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(applications)
  );
}