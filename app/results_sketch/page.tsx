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
  const score = parseFloat(searchParams.get('score') || '0')
  const layoutScore = parseFloat(searchParams.get('neatness') || '0')
  const colorScore = parseFloat(searchParams.get('passion') || '0')
  const typographyScore = parseFloat(searchParams.get('attention_to_detail') || '0')

  const data = [
    { category: 'Overall', score },
    { category: 'Neatness', score: layoutScore },
    { category: 'Passion', score: colorScore },
    { category: 'Attention To Detail', score: typographyScore },
  ]

  const [foregroundColor, setForegroundColor] = useState('#000000') // Default to black

  useEffect(() => {
    const computedStyle = getComputedStyle(document.documentElement)
    const color = computedStyle.getPropertyValue('--foreground').trim()
    setForegroundColor(color || '#000000')
  }, [])

  const handleShareResults = () => {
    console.log('Sharing results:', { score, layoutScore, colorScore, typographyScore })
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold text-foreground">Your UI Design Quiz Results</CardTitle>
        <Button onClick={handleShareResults} className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share Results
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-xl mb-6 text-foreground">Your overall score: {score.toFixed(2)}%</p>
        <ChartContainer
          config={{
            score: {
              label: "Score",
              color: foregroundColor,
            },
          }}
          className="h-[300px]"
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
          <h3 className="text-lg font-semibold mb-2 text-foreground">Score Breakdown:</h3>
          <ul className="list-disc pl-5 text-foreground">
            <li>Layout: {layoutScore.toFixed(2)}%</li>
            <li>Color Theory: {colorScore.toFixed(2)}%</li>
            <li>Typography: {typographyScore.toFixed(2)}%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ResultsContent />
      </Suspense>
    </div>
  )
}
