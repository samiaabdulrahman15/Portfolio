import React from "react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      <div className="absolute top-24 left-1/4 w-56 h-56 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-16 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="text-center mt-12 mb-10">
        <h1 className="text-5xl font-bold">
          Hi, I’m <span className="text-purple-400">Samia</span>{" "}
          <span className="inline-block animate-wave">👋</span>
          <img
            src="/public/images/userIcon.png"
            alt="User Icon"
            width={160}
            height={160}
            className="relative w-40 h-40 object-contain rounded-full"
          />
        </h1>

        <p className="text-gray-400 text-lg mt-3">
          Apprentice Technical and Digital · BT Group
        </p>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-0 bg-purple-500/40 blur-2xl rounded-full"></div>
        <img
          src="/images/userIcon.png"
          alt="User-Icon"
          width={160}
          height={160}
          className="relative w-40 h-40 object-contain rounded-full"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        <div
          className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6
          transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-400">Name</h2>
          <p className="text-gray-300">Samia Abdulrahman</p>
        </div>

        <div
          className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6
          transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-400">Skills</h2>

          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">⚛️ React</li>
            <li className="flex items-center gap-2">▲ Next.js</li>
            <li className="flex items-center gap-2">🎨 Tailwind CSS</li>
          </ul>
        </div>

        <div
          className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6
          transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-400">About</h2>
          <p className="text-gray-300">
            Frontend developer passionate about building clean, modern user
            interfaces with React and Tailwind.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-purple-500/40 to-transparent my-12"></div>
    </main>
  );
}
