export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-black shadow rounded-lg p-6 text-center">
      <h3 className="text-white text-sm">{title}</h3>
      <p className="text-2xl font-bold value">{value}</p>
    </div>
  );
}
