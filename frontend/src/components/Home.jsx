import { ArrowRight, Facebook, Linkedin, Twitter } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-5xl font-bold">
                Take Student
                <span className="block text-red-500">Experience</span>
                to the Next Level
              </h2>
            </div>
            <p className="text-gray-400 max-w-xl">
              Architect client-centered total linkage for intuitive benefits
              restore convergence before real-time partnerships.
            </p>
            <div className="flex space-x-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full flex items-center space-x-2">
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/public/hero.jpg"
              alt="Student working on laptop"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="absolute -top-4 -left-4 bg-red-500 w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold">
              01
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
