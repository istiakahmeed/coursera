import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BookOpen, Clock, Star, User } from "lucide-react";

export default function CourseCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative">
        <img
          src="/public/course-3.jpg"
          alt="Course preview"
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-yellow-400 text-yellow-900">
          <Star className="w-3 h-3 mr-1 fill-current" /> 4.5 (120)
        </Badge>
      </div>
      <CardHeader className="p-4">
        <Badge className="w-fit mb-2 bg-red-100 text-red-800 hover:bg-red-100">
          Mathematics
        </Badge>
        <h2 className="text-xl font-bold">
          Create a Digital Illustration With Procreate
        </h2>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            15 Lessons
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            4h 30m 15s
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            Beginner
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="/placeholder.svg?height=40&width=40"
              alt="Chapin Daigle"
            />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <span className="font-medium">Chapin Daigle</span>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted-foreground line-through">
            $79.00
          </span>
          <span className="text-lg font-bold text-primary ml-2">$69.00</span>
        </div>
      </CardFooter>
    </Card>
  );
}
