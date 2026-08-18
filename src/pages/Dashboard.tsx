import StatCard from "../components/StatCard";
import ApplicationList from "../components/ApplicationList";


function Dashboard() {
  return (
    <div>
      <h1>Job Application Tracker</h1>

      <p>Track your job applications, interviews and offers.</p>

      <div>
        <StatCard title="Applications" value={0} />
        <StatCard title="Interviews" value={0} />
        <StatCard title="Offers" value={0} />
        <StatCard title="Rejected" value={0} />
      </div>

      <ApplicationList />
    </div>
  );
}


export default Dashboard;