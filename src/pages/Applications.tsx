import { useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import { mockApplications } from "../utils/mockApplications";
import type { JobApplication } from "../types/application";
import ApplicationForm from "../components/ApplicationForm";

// This component displays a list of job applications and allows the user to clear the list.
function Applications() {

  // Initialize the state for the list of applications using mock data.
  const [applications, setApplications] =
    useState<JobApplication[]>(mockApplications);

  return (
    <main>
      <h1>Applications</h1>

      <p>View and manage your job applications.</p>

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