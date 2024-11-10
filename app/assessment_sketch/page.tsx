'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const quizQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of white space in UI design?",
    options: [
      "To fill empty areas",
      "To improve readability and focus",
      "To make the design look minimalist",
      "To reduce printing costs"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which color is often associated with trust and security in UI design?",
    options: [
      "Red",
      "Yellow",
      "Blue",
      "Green"
    ],
    correctAnswer: 2
  },
  // ... Add 13 more questions here with similar structure
  {
    id: 15,
    question: "What is the recommended maximum number of primary navigation items?",
    options: [
      "3-5",
      "5-7",
      "7-9",
      "10-12"
    ],
    correctAnswer: 1
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(quizQuestions.length).fill(-1))
  const router = useRouter()

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate dummy scores
      const correctAnswers = answers.filter((answer, index) => answer === quizQuestions[index].correctAnswer).length
      const score = (correctAnswers / quizQuestions.length) * 100
      
      // Navigate to results page with dummy scores
      router.push(`/results_sketch?score=${score}&layout=${Math.random() * 100}&color=${Math.random() * 100}&typography=${Math.random() * 100}`)
    }
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>UI Design Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1} of {quizQuestions.length}</h2>
          <p className="mb-4">{question.question}</p>
          <RadioGroup value={answers[currentQuestion].toString()} onValueChange={(value) => handleAnswer(parseInt(value))}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} disabled={answers[currentQuestion] === -1}>
            {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}