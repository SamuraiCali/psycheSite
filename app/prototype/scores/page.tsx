"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarIcon } from "@radix-ui/react-icons";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Your Test Results
        </h1>
        {results.length === 0 ? (
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-900 text-center text-lg">
                No test results available yet. Take a test to see your results
                here!
              </p>
            </CardContent>
          </Card>
        ) : (
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((result) => (
                <Card
                  key={result.id}
                  className="overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <CardHeader className="bg-primary p-4">
                    <CardTitle className="text-xl font-semibold text-primary-foreground">
                      {result.testName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <Badge
                        variant="secondary"
                        className="text-lg px-3 py-1 self-start"
                      >
                        {result.result}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <time dateTime={result.submissionTime}>
                          {new Date(result.submissionTime).toLocaleString()}
                        </time>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        )}
      </main>
    </div>
  );
};

export default PreviousResultsPage;
