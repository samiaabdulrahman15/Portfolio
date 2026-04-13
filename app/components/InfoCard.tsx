export default function InfoCard({ title, subtitle }: any) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-5 shadow-lg">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    </div>
  );
}
