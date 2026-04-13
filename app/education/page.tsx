import React from "react";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-purple-600/20 rounded-full blur-3xl absolute -top-10 -left-10"></div>
        <div className="w-72 h-72 bg-blue-600/20 rounded-full blur-3xl absolute bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 text-center mb-12 animate-fadeIn">
        <h1 className="text-5xl font-bold mb-4">Education</h1>
        <p className="text-gray-300 text-lg">
          A quick overview of my academic background and qualifications.
        </p>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-purple-500/40 to-transparent my-12"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#111] border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold mb-2">University</h3>
          <p className="text-gray-400">University Of Staffordshire</p>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-400">React, Next.js, UI/UX</p>
        </div>
      </div>

      <div className="relative z-10 mt-16">
        <h2 className="text-2xl font-semibold mb-6">Journey</h2>

        <div className="border-l border-gray-700 pl-6 space-y-8">
          <div>
            <h3 className="text-lg font-bold">2025 – Present</h3>
            <p className="text-gray-400">
              Apprentice Technical & Digital · BT Group
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">2021 – 2024</h3>
            <p className="text-gray-400">College – Digital Design Pathway</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-[#111] border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Current Achievements</h3>
          <p className="text-gray-400">
            Completed Early careers Hackathon , Partook In ECN outreach events ,
            Completed Semester 1 within University{" "}
          </p>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Goals </h3>
          <p className="text-gray-400">
            Become proficient in React and TypeScript
          </p>
        </div>
      </div>

      <footer className="relative z-10 text-center text-gray-500 mt-20 py-6">
        © 2026 Samia Abdulrahman · Built with React + Tailwind
      </footer>
    </main>
  );
}
