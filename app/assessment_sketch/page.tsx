"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const quizQuestions = [
  {
    id: 1,
    question: "Do you prefer to work alone or in a team?",
    options: ["Yes", "No"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Your boss says their job is on the line if a certain project isn't done by the end of the week. What do you do?",
    options: [
      "Keep working the same as usual",
      "Work extra late to get the project done by the deadline",
      "Try to recruit some help",
      "Take longer breaks",
    ],
    correctAnswer: 2,
  },
  // Add other questions here as before...
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();

  const handleAnswer = (answer: number) => {
    // Answer is selected, but not saved
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Generate random placeholder scores for test
      const score = Math.random() * 100;
      const neatness = Math.random() * 100;
      const passion = Math.random() * 100;
      const attentionToDetail = Math.random() * 100;

      // Navigate to results page with random values
      router.push(
        `/results?score=${score}&neatness=${neatness}&passion=${passion}&attention_to_detail=${attentionToDetail}`
      );
    }
  };

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <CardTitle className="text-2xl font-bold">UI Design Quiz</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </h2>
          <p className="mb-4 text-gray-700">{question.question}</p>
          <RadioGroup onValueChange={(value) => handleAnswer(parseInt(value))}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-4">
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="text-blue-600"
                />
                <Label htmlFor={`option-${index}`} className="text-gray-700">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="p-4 bg-blue-50 rounded-b-lg">
          <Button
            onClick={handleNext}
            className="bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 transition-colors py-2 px-6 rounded-lg"
          >
            {currentQuestion === quizQuestions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
