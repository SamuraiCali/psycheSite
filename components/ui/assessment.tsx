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

  const handleSubmit = () => {
    const score = Object.values(answers).filter((a) => a).length * 10; // Example scoring
    addTestResult({
      testId,
      score,
      date: new Date().toISOString(),
    });

    router.push("/prototype/results");
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
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="text-gray-700">
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
          >
            Previous
          </Button>
          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700"
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
