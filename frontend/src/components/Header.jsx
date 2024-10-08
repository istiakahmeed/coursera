import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <Badge
              variant="secondary"
              className="bg-transparent border border-red-500 text-red-500 mb-4">
              Most Popular Course
            </Badge>
            <p className="text-sm md:text-base mb-2">
              Architect client-centered total linkage for intuitive benefits.
            </p>
            <p className="text-sm md:text-base">
              Dynamically restore convergence before real-time restore
              convergence before real-time
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-md">
            The World&apos;s Largest Selection of{" "}
            <span className="text-red-500">Online Courses</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
