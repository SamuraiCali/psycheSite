"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type Question = {
  id: string;
  question: string;
  options: string[];
};

type AssessmentProps = {
  title: string;
  testId: string;
  questions: Question[];
};

const Assessment: React.FC<AssessmentProps> = ({
  title,
  testId,
  questions,
}) => {
  const { user, addTestResult } = useUser();
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleChange = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    // This is a simplified calculation. You may want to implement a more sophisticated algorithm.
    const answerValues = Object.values(answers);
    const mostFrequent = answerValues
      .sort(
        (a, b) =>
          answerValues.filter((v) => v === a).length -
          answerValues.filter((v) => v === b).length
      )
      .pop();

    switch (testId) {
      case "leadership":
        return mostFrequent === questions[0].options[0]
          ? "Autocratic"
          : mostFrequent === questions[0].options[1]
          ? "Democratic"
          : mostFrequent === questions[0].options[2]
          ? "Laissez-Faire"
          : "Transformational";
      case "neurodivergence":
        return mostFrequent === questions[0].options[0]
          ? "ADHD Traits"
          : mostFrequent === questions[0].options[1]
          ? "Autism Spectrum Traits"
          : mostFrequent === questions[0].options[2]
          ? "Dyslexia Traits"
          : "Neurotypical";
      case "personality":
        return mostFrequent === questions[0].options[0]
          ? "Analyst"
          : mostFrequent === questions[0].options[1]
          ? "Diplomat"
          : mostFrequent === questions[0].options[2]
          ? "Sentinel"
          : "Explorer";
      default:
        return "Inconclusive";
    }
  };

  const handleSubmit = () => {
    const result = calculateResult();
    const testResult = {
      id: Date.now().toString(),
      testName: title,
      result: result,
      submissionTime: new Date().toISOString(),
    };

    // Store the result in local storage
    const storedResults = JSON.parse(
      localStorage.getItem("testResults") || "[]"
    );
    localStorage.setItem(
      "testResults",
      JSON.stringify([...storedResults, testResult])
    );

    addTestResult({
      testId,
      result,
      date: new Date().toISOString(),
    });

    router.push(`/results?test=${testId}&result=${result}`);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-600">
            {title}
          </CardTitle>
          <Progress value={progress} className="w-full mt-2" />
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-xl font-semibold mb-4 text-gray-800">
              {questions[currentQuestion].question}
            </p>
            <RadioGroup
              value={answers[questions[currentQuestion].id] || ""}
              onValueChange={handleChange}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`option-${index}`}
                    className="border-2 border-gray-300 text-blue-600"
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="text-gray-700 text-lg cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Previous
          </Button>
          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!answers[questions[currentQuestion].id]}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={Object.keys(answers).length !== questions.length}
            >
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Assessment;
