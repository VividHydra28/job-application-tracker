interface StatCardProps {
  title: string;
  value: number;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

export default StatCard;