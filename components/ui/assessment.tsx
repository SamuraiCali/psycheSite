"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";

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

  const handleChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    if (!user) {
      router.push("/login");
      return;
    }

    const score = Object.values(answers).filter((a) => a).length * 10; // Example scoring
    addTestResult({
      testId,
      score,
      date: new Date().toISOString(),
    });

    router.push("/results");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <p className="text-lg font-semibold mb-2">{q.question}</p>
          {q.options.map((option) => (
            <label key={option} className="block mb-2">
              <input
                type="radio"
                name={q.id}
                value={option}
                onChange={() => handleChange(q.id, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default Assessment;
