export default function StatCard({ label, value, change }: any) {
  return (
    <div className="bg-black rounded-lg p-4 border border-gray-700">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white text-2xl font-bold mt-1">{value}</p>
      <p className="text-green-500 text-xs mt-1">{change}</p>
    </div>
  );
}
