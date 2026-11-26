import type { ApplicationStatus } from "../types/application";

type StatusFilterValue = ApplicationStatus | "All";

interface StatusFilterProps {
  selectedStatus: StatusFilterValue;
  onStatusChange: (status: StatusFilterValue) => void;
}

function StatusFilter({
  selectedStatus,
  onStatusChange,
}: StatusFilterProps) {
  return (
    <select
      value={selectedStatus}
      onChange={(event) =>
        onStatusChange(
          event.target.value as StatusFilterValue
        )
      }
    >
      <option value="All">All Statuses</option>
      <option value="Applied">Applied</option>
      <option value="Screening">Screening</option>
      <option value="Interview">Interview</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
      <option value="Withdrawn">Withdrawn</option>
    </select>
  );
}

export default StatusFilter;