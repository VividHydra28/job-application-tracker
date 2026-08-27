import { useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import { mockApplications } from "../utils/mockApplications";
import type { JobApplication, ApplicationStatus } from "../types/application";
// import type { JobApplication, ApplicationStatus, ApplicationDate } from "../types/application";
import ApplicationForm from "../components/ApplicationForm";

//------------------------------------------END OF IMPORTS--------------------------------------------//

// This component displays a list of job applications and allows the user to clear the list.
function Applications() {

  // Initialize the state for the list of applications using mock data.
  const [applications, setApplications] =
    useState<JobApplication[]>(mockApplications);

  // This function handles adding a new application to the list.
  function handleAddApplication(applicationData: {
    company: string;
    position: string;
    location: string;
    status: ApplicationStatus;
    dateApplied: string; //ApplicationDate; //used to be a string
    jobUrl: string;
    salary: string;
    notes: string;
  }) 
  // These lines create a new application object with a unique ID and add it to the state.
  {
    const newApplication: JobApplication = {
      id: crypto.randomUUID(),
      ...applicationData,
    };

    setApplications((currentApplications) => [
      ...currentApplications,
      newApplication,
    ]);
  }

  return (
    <main>
      <h1>Applications</h1>

      <p>View and manage your job applications.</p>

      <ApplicationForm onSubmit={handleAddApplication} />

      <section>
        {/* Render a list of ApplicationCard components for each application in the state. */}
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
          />
        ))}
      </section>
          
      <button
        onClick={() => {
          setApplications([]);
        }}
      >
        Clear Applications
      </button>
    </main>
  );
}





export default Applications;