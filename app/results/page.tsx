"use client";

import React, { Suspense, useState } from "react";
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

  const [isExpanded, setIsExpanded] = useState(false); // useState should be called unconditionally

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
        return `Your leadership style tends towards ${result}. This style is often associated with how decisions are made in a group and the approach taken to managing people. For example, a ${result} leader is known for...`;
      case "neurodivergence":
        return result === "Neurotypical"
          ? "Your results suggest a neurotypical profile, which generally indicates a cognitive function that aligns with the typical development and processing of information in society. This means you may not experience cognitive differences related to learning, attention, or social interaction."
          : `Your results indicate traits associated with ${result}. This neurodivergence is characterized by specific cognitive, social, and behavioral differences that might influence how you approach learning, work, and relationships. For example, individuals with ${result} might experience challenges with...`;
      case "personality":
        return `In the workplace, you exhibit traits of a ${result}. This personality type is known for unique characteristics in how individuals interact with others, make decisions, and approach work. For instance, ${result}s tend to be...`;
      default:
        return "No description available.";
    }
  };

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="min-h-screen p-8 flex items-center justify-center" style={{ color: "var(--foreground)", background: "var(--background)" }}>
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
            <p className="text-lg font-semibold">Your Result: {result}</p>
            <p>
              {getResultDescription(test, result)}
            </p>
          </div>
          {isExpanded && (
            <div className="mt-4 text-gray-400">
              <p className="text-base">
                {getResultDescription(test, result)} More detailed information
                about your results can be added here. For example, additional
                traits, tips for improving in certain areas, and how others
                might perceive these results could be discussed in greater
                detail.
              </p>
            </div>
          )}
          <Button
            variant="link"
            onClick={toggleExpanded}
            className="text-blue-600"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/">Back to Tests</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Link href="/scores">Share Results</Link>
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
