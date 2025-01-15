import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { BookOpen } from "lucide-react";
import useUserSessionStore from "../stores/useSessionStore";
import { useState } from "react";

export default function LandingPage() {
  const [formName, setFormName] = useState("");
  const { name, setName } = useUserSessionStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(formName);
    // Here you would typically navigate to the main app or update app state
    console.log(`Welcome, ${name}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-indigo-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <BookOpen className="mr-2" />
            Gutenberg Explorer
          </CardTitle>
          <CardDescription className="text-center">
            Dive into the world of literature analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formName || ""}
                  onChange={(e: any) => setFormName(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Start Exploring
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-center text-gray-600">
          Fetch books from Project Gutenberg, read, and analyze text with ease.
        </CardFooter>
      </Card>
    </div>
  );
}
