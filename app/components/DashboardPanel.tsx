import StatCard from "./StatCard";

export default function DashboardPanel() {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 h-fit">
      <h2 className="text-white text-xl font-semibold mb-5">Dashboard</h2>

      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Users" value="2,450" change="+110" />
        <StatCard label="Projects" value="50" change="+4" />
        <StatCard label="Tasks" value="312" change="+25" />
      </div>

      <div className="mt-6 h-24 bg-black rounded-lg border border-gray-700"></div>
    </div>
  );
}
