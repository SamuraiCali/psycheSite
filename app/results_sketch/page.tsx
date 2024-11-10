"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const workplaceCompatibility = parseFloat(
    searchParams.get("workplaceCompatibility") || "0"
  );
  const teamCollaboration = parseFloat(
    searchParams.get("teamCollaboration") || "0"
  );
  const leadershipPotential = parseFloat(
    searchParams.get("leadershipPotential") || "0"
  );
  const stressManagement = parseFloat(
    searchParams.get("stressManagement") || "0"
  );

  const data = [
    { category: "Workplace Compatibility", score: workplaceCompatibility },
    { category: "Team Collaboration", score: teamCollaboration },
    { category: "Leadership Potential", score: leadershipPotential },
    { category: "Stress Management", score: stressManagement },
  ];

  const [foregroundColor, setForegroundColor] = useState("#000000"); // Default to black

  useEffect(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    const color = computedStyle.getPropertyValue("--foreground").trim();
    setForegroundColor(color || "#000000");
  }, []);

  const handleShareResults = () => {
    console.log("Sharing results:", {
      workplaceCompatibility,
      teamCollaboration,
      leadershipPotential,
      stressManagement,
    });
  };

  'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

function ResultsContent() {
  const searchParams = useSearchParams()
  const workplaceCompatibility = parseFloat(searchParams.get('workplaceCompatibility') || '0')
  const teamCollaboration = parseFloat(searchParams.get('teamCollaboration') || '0')
  const leadershipPotential = parseFloat(searchParams.get('leadershipPotential') || '0')
  const stressManagement = parseFloat(searchParams.get('stressManagement') || '0')

  const data = [
    { category: 'Workplace Compatibility', score: workplaceCompatibility },
    { category: 'Team Collaboration', score: teamCollaboration },
    { category: 'Leadership Potential', score: leadershipPotential },
    { category: 'Stress Management', score: stressManagement },
  ]

  const [foregroundColor, setForegroundColor] = useState('#000000') // Default to black

  useEffect(() => {
    const computedStyle = getComputedStyle(document.documentElement)
    const color = computedStyle.getPropertyValue('--foreground').trim()
    setForegroundColor(color || '#000000')
  }, [])

  const handleShareResults = () => {
    console.log('Sharing results:', { workplaceCompatibility, teamCollaboration, leadershipPotential, stressManagement })
  }

  return (
    <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between bg-blue-600 text-white p-4 rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Your Psychological Test Results</CardTitle>
        <Button
          onClick={handleShareResults}
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white"
        >
          <Share2 className="w-4 h-4" />
          Share Results
        </Button>
      </CardHeader>
      <CardContent className="p-6 bg-gray-50"> {/* Added background for contrast */}
        <p className="text-xl mb-6 text-gray-800">Your overall test scores:</p> {/* Changed to dark gray for better visibility */}
        <ChartContainer
          config={{
            score: {
              label: "Score",
              color: foregroundColor,
            },
          }}
          className="h-[300px] bg-white shadow-md rounded-lg" {/* Added white background to chart */}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="category"
                stroke={foregroundColor}
                fontSize={12}
                tickLine={false}
                axisLine={false}
                style={{ fill: foregroundColor }}
              />
              <YAxis
                stroke={foregroundColor}
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
                style={{ fill: foregroundColor }}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                cursor={{ fill: `${foregroundColor}1A` }}
              />
              <Bar
                dataKey="score"
                fill={foregroundColor}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Score Breakdown:</h3> {/* Changed to dark gray for visibility */}
          <ul className="list-disc pl-5 text-gray-800"> {/* Changed to dark gray for better readability */}
            <li>Workplace Compatibility: {workplaceCompatibility.toFixed(2)}%</li>
            <li>Team Collaboration: {teamCollaboration.toFixed(2)}%</li>
            <li>Leadership Potential: {leadershipPotential.toFixed(2)}%</li>
            <li>Stress Management: {stressManagement.toFixed(2)}%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-foreground flex items-center justify-center p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ResultsContent />
      </Suspense>
    </div>
  )
}
}
