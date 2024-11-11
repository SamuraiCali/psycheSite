"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ResultsPage() {
  const router = useRouter();

  // Randomized personality and leadership data
  const [personalityData, setPersonalityData] = useState<any>([]);
  const [leadershipData, setLeadershipData] = useState<any>([]);

  useEffect(() => {
    // Fake data for personality traits
    const personality = [
      { category: "Extraversion", value: Math.random() * 100 },
      { category: "Openness", value: Math.random() * 100 },
      { category: "Conscientiousness", value: Math.random() * 100 },
      { category: "Neuroticism", value: Math.random() * 100 },
      { category: "Agreeableness", value: Math.random() * 100 },
    ];

    // Fake data for leadership style
    const leadership = [
      { category: "Autocratic", value: Math.random() * 100 },
      { category: "Democratic", value: Math.random() * 100 },
      { category: "Laissez-Faire", value: Math.random() * 100 },
      { category: "Transformational", value: Math.random() * 100 },
      { category: "Transactional", value: Math.random() * 100 },
    ];

    setPersonalityData(personality);
    setLeadershipData(leadership);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <CardTitle className="text-2xl font-bold">
            Personality & Leadership Test Results
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Your Personality Traits
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={personalityData}>
              <XAxis dataKey="category" stroke="#555" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-800">
            Leadership Style
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadershipData}>
              <XAxis dataKey="category" stroke="#555" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FF9800" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Your Personality Profile:
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Extraversion:</strong>{" "}
                {personalityData[0]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Openness:</strong>{" "}
                {personalityData[1]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Conscientiousness:</strong>{" "}
                {personalityData[2]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Neuroticism:</strong>{" "}
                {personalityData[3]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Agreeableness:</strong>{" "}
                {personalityData[4]?.value.toFixed(2)}%
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">
              Your Leadership Style:
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Autocratic:</strong>{" "}
                {leadershipData[0]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Democratic:</strong>{" "}
                {leadershipData[1]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Laissez-Faire:</strong>{" "}
                {leadershipData[2]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Transformational:</strong>{" "}
                {leadershipData[3]?.value.toFixed(2)}%
              </li>
              <li>
                <strong>Transactional:</strong>{" "}
                {leadershipData[4]?.value.toFixed(2)}%
              </li>
            </ul>
          </div>
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
