"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/Header";

type TestResult = {
  id: string;
  testName: string;
  result: string;
  submissionTime: string;
};

const PreviousResultsPage = () => {
  const [results, setResults] = useState<TestResult[]>([]);

  useEffect(() => {
    const storedResults = JSON.parse(
      localStorage.getItem("testResults") || "[]"
    );
    setResults(storedResults);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Header></Header>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Previous Test Results
      </h1>
      {results.length === 0 ? (
        <p className="text-gray-600">
          No test results available. Take a test to see your results here!
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <Card key={result.id} className="overflow-hidden">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-lg text-black">
                  {result.testName}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {result.result}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {new Date(result.submissionTime).toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviousResultsPage;
