import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import InfoCard from "./components/InfoCard";
import DashboardPanel from "./components/DashboardPanel";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white px-24 py-10">
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-10">
          <div>
            <SectionTitle title="Education" />

            <div className="grid grid-cols-2 gap-5">
              <InfoCard
                title="University Name"
                subtitle="Degree in Digital Design"
              />
              <InfoCard title="Expereience" subtitle="React skills" />
            </div>
          </div>

          <div>
            <SectionTitle title="Experience" />

            <div className="grid grid-cols-2 gap-5">
              <InfoCard
                title="Frontend "
                subtitle="Building web apps using Next.j"
              />
              <InfoCard
                title="Apprentice"
                subtitle="Learning programming basics"
              />
            </div>
          </div>
        </div>

        <DashboardPanel />
      </div>
    </main>
  );
}
