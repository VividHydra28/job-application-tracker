import { useEffect, useState } from "react";
import type {ApplicationStatus, JobApplication } from "../types/application";
// import type { ApplicationDate, ApplicationStatus } from "../types/application";


//----------------------------END OF IMPORTS-----------------------------------------------//

// This interface defines the props for the ApplicationForm component.
interface ApplicationFormProps {
  onSubmit: (application: {
    company: string;
    position: string;
    location: string;
    status: ApplicationStatus;
    dateApplied: string; //string
    jobUrl: string;
    salary: string;
    notes: string;
  }) => void;

   editingApplication: JobApplication | null;
}
// This component renders a form for adding a new job application.
function ApplicationForm({ 
  onSubmit, 
  editingApplication 

}: ApplicationFormProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] =
    useState<ApplicationStatus>("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");

  // This effect runs whenever the editingApplication prop changes. If there is an application being edited, it populates the form fields with the existing data.
  useEffect(() => {
  if (editingApplication) {
    setCompany(editingApplication.company);
    setPosition(editingApplication.position);
    setLocation(editingApplication.location);
    setStatus(editingApplication.status);
    setDateApplied(editingApplication.dateApplied);
    setJobUrl(editingApplication.jobUrl ?? "");
    setSalary(editingApplication.salary ?? "");
    setNotes(editingApplication.notes ?? "");
  }
}, [editingApplication]);

  // This function resets the form fields to their initial state.
  function resetForm() {

    setCompany("");
    setPosition("");
    setLocation("");
    setStatus("Applied");
    setDateApplied("");
    setJobUrl("");
    setSalary("");
    setNotes("");
  }

  

  function handleSubmit(event: React.FormEvent) {
    // Prevent the default form submission behavior to avoid page reload.
    event.preventDefault();

    // Error handling suggestion: validate required fields here and show field-level
    // messages before passing the data to the parent component.

    // Error handling suggestion: wrap this callback in try/catch if onSubmit later
    // saves to an API or another service that can reject the submission.
    onSubmit({
      company,
      position,
      location,
      status,
      dateApplied,
      jobUrl,
      salary,
      notes,
    });
    // Clear the form fields after submission
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Error handling suggestion: add noValidate only if replacing native browser
        validation with custom validation and an accessible error summary. */}
      <div>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="position">Position</label>
        <input
          id="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="status">Status</label>

        <select
          id="status"
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as ApplicationStatus)
          }
        >
          <option value=" - "> - </option>
          <option value="Applied">Applied</option>
          <option value="Screening">Screening</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
          <option value="Withdrawn">Withdrawn</option>
        </select>
      </div>

      <div>
        <label htmlFor="dateApplied">Date Applied</label>
        <input
          id="dateApplied"
          type="date"
          value={dateApplied}
          onChange={(event) => setDateApplied(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="jobUrl">Job URL</label>
        <input
          id="jobUrl"
          type="url"
          value={jobUrl}
          onChange={(event) => setJobUrl(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
      </div>

      <button type="submit">
        Add Application
      </button>
    </form>
  );
}

export default ApplicationForm;

//--------------------------------------------------------END OF CODE-------------------------------------//