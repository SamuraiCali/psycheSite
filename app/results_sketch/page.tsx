"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ResultsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Thank you for completing the quiz!
          </h2>
          <p className="mb-4 text-gray-700">Here are your results:</p>
          <p className="text-gray-700">
            Your quiz results will be available soon!
          </p>
        </CardContent>
        <CardFooter className="p-4 bg-blue-50 rounded-b-lg">
          <Button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-6 rounded-lg"
          >
            Go Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
