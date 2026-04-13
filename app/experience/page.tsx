import React from "react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-purple-600/20 rounded-full blur-3xl absolute -top-10 -left-10"></div>
        <div className="w-72 h-72 bg-blue-600/20 rounded-full blur-3xl absolute bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 text-center mb-12 animate-fadeIn">
        <h1 className="text-5xl font-bold mb-4">Experience</h1>
        <p className="text-gray-300 text-lg">
          A summary of my technical experience and roles.
        </p>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-purple-500/40 to-transparent my-12"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111] border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold mb-2">BT Group · Apprentice</h3>
          <p className="text-gray-400 mb-3">
            Working within Digital, contributing to web development projects,
            learning React, UX/UI principles, and professional teamwork.
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="px-3 py-1 text-sm bg-purple-600/20 border border-purple-500/30 rounded-full">
              React
            </span>
            <span className="px-3 py-1 text-sm bg-blue-600/20 border border-blue-500/30 rounded-full">
              Next.js
            </span>
            <span className="px-3 py-1 text-sm bg-pink-600/20 border border-pink-500/30 rounded-full">
              UI/UX
            </span>
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
          <h3 className="text-xl font-semibold mb-2">Personal Projects</h3>
          <p className="text-gray-400 mb-3">
            Building modern web interfaces, dashboards, and portfolios using
            modern frontend technologies.
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="px-3 py-1 text-sm bg-green-600/20 border border-green-500/30 rounded-full">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 text-sm bg-yellow-600/20 border border-yellow-500/30 rounded-full">
              JavaScript
            </span>
            <span className="px-3 py-1 text-sm bg-gray-600/20 border border-gray-500/30 rounded-full">
              Responsive Design
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-20">
        <h2 className="text-2xl font-semibold mb-6">Completions</h2>

        <div className="border-l border-gray-700 pl-6 space-y-8">
          <div>
            <h3 className="text-lg font-bold"> Networks and Hardware</h3>
            <p className="text-gray-400">
              Completed Networks and Hardware and proficient knowledge in
              Networks
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Business and data analysis</h3>
            <p className="text-gray-400">
              Completed Business and data analysis with proficient knowledge in
              data language sucha as SQl and database design.{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
