import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader } from "lucide-react"; // Lucide loader icon
import { useState } from "react";
import { Link } from "react-router-dom";

// SignUpPage Component
export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("user");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    // Simulate API call for sign up
    console.log("SignUp form submitted:", {
      username,
      email,
      password,
      accountType,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Handle the response from the API or validation
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create an Account 🚀</CardTitle>
          <CardDescription>
            Sign up and start your learning journey.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              {/* Username Input */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Account Type Radio Group */}
              <div className="flex flex-col space-y-1.5">
                <Label>Select Account Type</Label>
                <RadioGroup value={accountType} onValueChange={setAccountType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="user" id="user" />
                    <Label htmlFor="user">
                      User: For students and learners
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label htmlFor="admin">
                      Admin: For instructors and course administrators
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>

          {/* Form Submit Button */}
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}{" "}
              {/* Lucide Loader */}
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <span className="text-primary cursor-pointer hover:underline">
                <Link to="/login">Log in here</Link>
              </span>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
