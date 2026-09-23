import type { JobApplication } from "../types/application";

//---------------------------------------------------END OF IMPORTS-----------------------------------------------------//

//This variable defines the key used to store and retrieve job applications from local storage.
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

/*
export default function applicationStorage(): {
  getApplications: () => JobApplication[];
  saveApplications: (applications: JobApplication[]) => void;
} {
  return {
    getApplications,
    saveApplications,
  };
}
  */

// This function returns an object containing the getApplications and saveApplications functions, allowing other parts of the application to interact with local storage for job applications.
export default function applicationStorage() {
  return {
    getApplications,
    saveApplications,
  };
}
  

