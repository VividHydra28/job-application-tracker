import type { ApplicationStatus } from "../types/application";

interface StatusBadgeProps {
  status: ApplicationStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  return <span>{status}</span>;
}

export default StatusBadge;