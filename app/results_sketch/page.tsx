"use client";

import { useEffect, useState } from "react";
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
  const query = new URLSearchParams(window.location.search);

  // Get the values from the URL query parameters
  const score = parseFloat(query.get("score") || "0");
  const neatness = parseFloat(query.get("neatness") || "0");
  const passion = parseFloat(query.get("passion") || "0");
  const attentionToDetail = parseFloat(query.get("attention_to_detail") || "0");

  // Set data for the chart
  const [data, setData] = useState([
    { category: "Score", value: score },
    { category: "Neatness", value: neatness },
    { category: "Passion", value: passion },
    { category: "Attention to Detail", value: attentionToDetail },
  ]);

  useEffect(() => {
    // You can modify or process the data here if necessary
  }, [score, neatness, passion, attentionToDetail]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Your Results Visualization
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="category" stroke="#555" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Detailed Results:
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Score: {score.toFixed(2)}%</li>
              <li>Neatness: {neatness.toFixed(2)}%</li>
              <li>Passion: {passion.toFixed(2)}%</li>
              <li>Attention to Detail: {attentionToDetail.toFixed(2)}%</li>
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
