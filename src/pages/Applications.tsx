import ApplicationCard from "../components/ApplicationCard";
import { mockApplications } from "../utils/mockApplications";

function Applications() {
  return (
    <main>
      <h1>Applications</h1>

      <p>View and manage your job applications.</p>

      <section>
        {mockApplications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
          />
        ))}
      </section>
    </main>
  );
}

export default Applications;