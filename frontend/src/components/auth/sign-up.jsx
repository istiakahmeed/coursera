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
import { Link, useNavigate } from "react-router-dom";

// SignUpPage Component
export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("user");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Error handling
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null); // Reset the error state before making the request

    try {
      // Send API request for sign up
      const response = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      // Check if the response has a valid JSON body
      const contentType = response.headers.get("Content-Type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        // Parse JSON response
        data = await response.json();
      } else {
        // Handle non-JSON response (e.g., empty body)
        throw new Error("Server did not return a valid JSON response.");
      }

      if (response.ok) {
        // If signup is successful, redirect to login page or another page
        console.log("Signup successful:", data);
        navigate("/login");
      } else {
        // Handle API errors
        throw new Error(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Form Submit Button */}
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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
