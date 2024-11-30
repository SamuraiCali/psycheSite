"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type TestResult = {
  leadership: string[];
  neurodivergence: string[];
  personality: string[];
};

const testResults: TestResult = {
  leadership: [
    "Autocratic",
    "Democratic",
    "Laissez-Faire",
    "Transformational",
    "Transactional",
    "Servant",
    "Charismatic",
  ],
  neurodivergence: [
    "Neurotypical",
    "Autism Spectrum",
    "ADHD",
    "Dyslexia",
    "Dyscalculia",
    "Dyspraxia",
    "Tourette's Syndrome",
  ],
  personality: [
    "Analyst",
    "Diplomat",
    "Sentinel",
    "Explorer",
    "Logician",
    "Commander",
    "Advocate",
    "Mediator",
  ],
};

const ResultsPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const test = searchParams.get("test") as keyof TestResult;
  const score = parseInt(searchParams.get("score") || "0", 10);

  if (!test || isNaN(score)) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <p className="text-center text-gray-600">Invalid test results.</p>
        </CardContent>
      </Card>
    );
  }

  const getResult = (test: keyof TestResult, score: number): string => {
    const results = testResults[test];
    const index = Math.min(
      Math.floor(score / (100 / results.length)),
      results.length - 1
    );
    return results[index];
  };

  const result = getResult(test, score);

  const getResultDescription = (
    test: keyof TestResult,
    result: string
  ): string => {
    switch (test) {
      case "leadership":
        return `Your leadership style tends towards ${result}. This style is characterized by...`;
      case "neurodivergence":
        return result === "Neurotypical"
          ? "Your results suggest a neurotypical profile. This means..."
          : `Your results indicate traits associated with ${result}. This neurodivergence is characterized by...`;
      case "personality":
        return `In the workplace, you exhibit traits of a ${result}. This personality type is known for...`;
      default:
        return "No description available.";
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-600">
            Test Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl font-semibold">
            Test: {test.charAt(0).toUpperCase() + test.slice(1)}
          </p>
          <div className="space-y-2">
            <p className="text-lg">Score: {score}%</p>
            <Progress value={score} className="w-full" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">Your Result: {result}</p>
            <p className="text-gray-600">
              {getResultDescription(test, result)}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/">Back to Tests</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Share Results
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const ResultsPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPageContent />
    </Suspense>
  );
};

export default ResultsPage;
