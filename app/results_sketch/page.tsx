'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const score = parseFloat(searchParams.get('score') || '0')
  const layoutScore = parseFloat(searchParams.get('layout') || '0')
  const colorScore = parseFloat(searchParams.get('color') || '0')
  const typographyScore = parseFloat(searchParams.get('typography') || '0')

  const data = [
    { category: 'Overall', score },
    { category: 'Layout', score: layoutScore },
    { category: 'Color Theory', score: colorScore },
    { category: 'Typography', score: typographyScore },
  ]

  const [foregroundColor, setForegroundColor] = useState('#000000') // Default to black

  useEffect(() => {
    // Fetch the --foreground color from CSS
    const computedStyle = getComputedStyle(document.documentElement)
    const color = computedStyle.getPropertyValue('--foreground').trim()
    setForegroundColor(color || '#000000') // Fallback to black if not set
  }, [])

  const handleShareResults = () => {
    console.log('Sharing results:', { score, layoutScore, colorScore, typographyScore })
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
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
                  style={{ fill: foregroundColor }} // Explicit text color
                />
                <YAxis
                  stroke={foregroundColor}
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                  style={{ fill: foregroundColor }} // Explicit text color
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={{ fill: `${foregroundColor}1A` }} // 1A is roughly 10% opacity in hex
                />
                <Bar 
                  dataKey="score" 
                  fill={foregroundColor} // Explicit bar color
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
    </div>
  )
}
