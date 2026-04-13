export default function Hero() {
  return (
    <div className="flex items-center gap-8 mb-12">
      <div className="w-28 h-28 rounded-full bg-gray-700"></div>

      <div>
        <h1 className="text-4xl font-bold text-white">
          Hello, I'm Samia Abdulrahman
        </h1>

        <p className="text-gray-400 mt-2">
          Apprentice Technical & Digital professional,.
        </p>

        <div className="flex gap-3 mt-4">
          <span className="px-3 py-1 bg-gray-800 text-sm rounded-lg">
            React
          </span>
          <span className="px-3 py-1 bg-gray-800 text-sm rounded-lg">
            UI/UX
          </span>
        </div>
      </div>
    </div>
  );
}
