import type { ApplicationStatus } from "../types/application";

//------------------------------END OF IMPORTS--------------------------------------------//  

interface StatusBadgeProps {
  status: ApplicationStatus;
}
// This component displays a badge with the status of a job application.
function StatusBadge({ status }: StatusBadgeProps) {
  return <span>{status}</span>;
}

export default StatusBadge;