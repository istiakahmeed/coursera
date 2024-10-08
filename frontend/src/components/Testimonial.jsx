import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUpRight } from "lucide-react"; // Import Lucide icons

export default function Testimonial() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <Badge variant="secondary" className="text-pink-600">
          Student Feedback
        </Badge>
        <h1 className="mt-2 text-3xl font-bold">
          Students Say{" "}
          <span className="text-pink-600">EduQuest About Courses</span>
        </h1>
      </div>
      <div className="bg-[#002b36] text-white p-6 rounded-lg space-y-4">
        <p className="text-lg">
          “Sam is somebody you need as a steward of your brand. He’s able to
          craft compelling brand narratives that bring a company’s vision to
          life. We care about safety big time — and so do your site’s visitors.
          With a Shared Hosting account-LMS site..”
        </p>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Ronald Richards" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">Ronald Richards</p>
            <p className="text-sm text-gray-400">Development</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
            aria-label="Upvote">
            <ArrowUpRight className="text-white" />
          </button>
          <button
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
            aria-label="Downvote">
            <ArrowDown className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
