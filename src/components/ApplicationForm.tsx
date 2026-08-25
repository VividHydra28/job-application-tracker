import { useState } from "react";
import type { ApplicationStatus } from "../types/application";

interface ApplicationFormProps {
  onSubmit: (application: {
    company: string;
    position: string;
    location: string;
    status: ApplicationStatus;
    dateApplied: string;
    jobUrl: string;
    salary: string;
    notes: string;
  }) => void;
}

function ApplicationForm({ onSubmit }: ApplicationFormProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] =
    useState<ApplicationStatus>("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

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
  }

  return (
    <form onSubmit={handleSubmit}>
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