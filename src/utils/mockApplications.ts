import type { JobApplication } from "../types/application";

export const mockApplications: JobApplication[] = [
  {
    id: "1",
    company: "Electrum",
    position: "Junior React Software Engineer",
    location: "Cape Town",
    status: "Interview",
    dateApplied: "2026-08-18",
    jobUrl: "https://example.com",
    salary: "R25,000 - R30,000",
    notes: "Technical interview scheduled.",
  },
  {
    id: "2",
    company: "Discovery",
    position: "Junior Software Engineer",
    location: "Johannesburg",
    status: "Applied",
    dateApplied: "2026-08-15",
    jobUrl: "https://example.com",
    salary: "R22,000 - R28,000",
    notes: "Application submitted through company website.",
  },
  {
    id: "3",
    company: "Takealot",
    position: "Frontend Developer",
    location: "Cape Town",
    status: "Rejected",
    dateApplied: "2026-08-10",
    jobUrl: "https://example.com",
    notes: "Application unsuccessful.",
  },
];

/*
mockApplications.push({
  id: "4",
  company: "Amazon",
  position: "Junior Software Engineer",
  location: "Durban",
  status: "Applied",
  dateApplied: "2026-08-20",
  jobUrl: "https://example.com",
  salary: "R25,000 - R30,000",
  notes: "Application submitted through company website.",
});
*/

/*
mockApplications.sort((a, b) => {
  const dateA = new Date(a.dateApplied);
  const dateB = new Date(b.dateApplied);
  return dateB.getTime() - dateA.getTime();
});
*/