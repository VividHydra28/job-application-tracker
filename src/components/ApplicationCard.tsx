import type { JobApplication } from "../types/application";
import StatusBadge from "./StatusBadge";

//----------------------------END OF IMPORTS--------------------------------------------//

// This interface defines the props for the ApplicationCard component.
interface ApplicationCardProps {
  application: JobApplication;
  onDelete: (id: string) => void;
  onEdit: (application: JobApplication) => void;
}

// This component displays a card with the details of a job application.
function ApplicationCard(
  { application, 
    onDelete,
    onEdit
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

      <button onClick={() => onEdit(application)}>
            Edit
      </button>

    </article>
  );
}

export default ApplicationCard;