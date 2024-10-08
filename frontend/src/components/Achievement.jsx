import { BookOpen, MessageSquare, Star, Users } from "lucide-react";

const Achievement = () => {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-8">
        Trusted by the world&apos;s best{" "}
        <span className="text-red-500">Companies Achievements</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AchievementCard
          icon={<Star className="w-6 h-6 text-purple-600" />}
          number="100k+"
          text="Our Happy Students"
          bgColor="bg-purple-100"
        />
        <AchievementCard
          icon={<BookOpen className="w-6 h-6 text-pink-600" />}
          number="50K+"
          text="Enrolled Learners"
          bgColor="bg-pink-100"
        />
        <AchievementCard
          icon={<Users className="w-6 h-6 text-orange-600" />}
          number="80+"
          text="Expert Instructor"
          bgColor="bg-orange-100"
        />
        <AchievementCard
          icon={<MessageSquare className="w-6 h-6 text-green-600" />}
          number="96.55"
          text="Satisfaction Rate"
          bgColor="bg-green-100"
        />
      </div>
    </div>
  );
};

export default Achievement;

// eslint-disable-next-line react/prop-types
function AchievementCard({ icon, number, text, bgColor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
      <div className={`${bgColor} p-3 rounded-full`}>{icon}</div>
      <div>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}
