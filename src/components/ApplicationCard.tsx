import type { JobApplication } from "../types/application";
import StatusBadge from "./StatusBadge";

interface ApplicationCardProps {
  application: JobApplication;
  onDelete: (id: string) => void;
  //Edit: () => void;
}

// This component displays a card with the details of a job application.
function ApplicationCard(
  { application, 
    onDelete 
  }: 
  ApplicationCardProps) 
  {
  return (
    <article>
      <h2>{application.company}</h2>

      <h3>{application.position}</h3>

      <p>{application.location}</p>

      <StatusBadge status={application.status} />

      <p>Applied: {application.dateApplied}</p>

    <button onClick={() => onDelete(application.id)}>
        Delete
      </button>

    </article>
  );
}

export default ApplicationCard;