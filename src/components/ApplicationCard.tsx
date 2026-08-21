import type { JobApplication } from "../types/application";
import StatusBadge from "./StatusBadge";

interface ApplicationCardProps {
  application: JobApplication;
}

function ApplicationCard({ application }: ApplicationCardProps) {
  return (
    <article>
      <h2>{application.company}</h2>

      <h3>{application.position}</h3>

      <p>{application.location}</p>

      <StatusBadge status={application.status} />

      <p>Applied: {application.dateApplied}</p>
    </article>
  );
}

export default ApplicationCard;