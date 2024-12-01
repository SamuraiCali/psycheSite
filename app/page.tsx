"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/ui/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
            Featured Assessments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAssessments.map((assessment) => (
              <Card key={assessment.id}>
                <Link href={`/assessments/${assessment.slug}`}>
                  <CardHeader>
                    <CardTitle style={{ color: "var(--foreground)" }}>
                      {assessment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: "var(--foreground)" }}>
                      {assessment.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
            Why Choose Psyche?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="block">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-10 h-10 mb-2" style={{ color: "var(--foreground)" }} />
                    <CardTitle style={{ color: "var(--foreground)" }}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{ color: "var(--foreground)" }}>{feature.description}</p>
                    <p className="mt-2 text-sm" style={{ color: "var(--foreground)" }}>
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 rounded-lg" style={{ color: "var(--foreground)", background: "var(--background)" }}>
          <h2 className="text-2xl font-semibold mb-4">Start Your Journey Today</h2>
          <p className="mb-4">
            Sign up for our newsletter to receive the latest assessments and
            tips on how to become a high-demand employee.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
              style={{ background: "var(--background)", color: "var(--foreground)" }}
            />
            <Button type="submit" className="bg-blue-600 text-white py-6">Subscribe</Button>
          </form>
        </section>
      </main>
      <footer className="py-6 mt-12" style={{ color: "var(--foreground)", background: "var(--background)" }}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Psyche. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const featuredAssessments = [
  {
    id: 1,
    slug: "personality",
    title: "Workplace Personality Test",
    description: "Discover your unique personality traits and strengths",
  },
  {
    id: 2,
    slug: "neuro",
    title: "Neurodivergence Test",
    description: "Understand how your brain works and how to leverage it",
  },
  {
    id: 3,
    slug: "leadership",
    title: "Leadership Style Assessment",
    description: "Uncover your leadership style and potential",
  },
];

const features = [
  {
    id: "comprehensive-assessments",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
    title: "Comprehensive Assessments",
    description:
      "Our assessments cover several aspects of the human psyche, from little decisions, to personalities.",
    details:
      "At Psyche, we believe in providing a holistic view of your personality and potential. Our comprehensive assessments explore various facets of your psyche, including decision-making processes, emotional intelligence, cognitive abilities, and interpersonal skills.",
  },
  {
    id: "real-world-scenarios",
    icon: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
    </svg>
    ),
    title: "Real-world Scenarios",
    description:
      "Find who you are when the cards are down. What do you do when people depend on you?",
    details:
      "Our assessments incorporate real-world scenarios that challenge you to think on your feet. These situations simulate high-pressure environments, team dynamics, and complex decision-making processes.",
  },
  {
    id: "online-convenience",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v3m0 0l2-2m-2 2l-2-2m3-7v4m0 0l2-2m-2 2l-2-2m-5 7V4m0 0L7 6m2-2L7 6M3 12h18"
        />
      </svg>
    ),
    title: "Online Convenience",
    description:
      "No need to travel for assessments. Complete them at your convenience.",
    details:
      "Our platform is accessible anytime, anywhere. Take assessments from the comfort of your home, during your lunch break, or whenever suits you best. Our platform is optimized for various devices, allowing seamless switching between computer, tablet, or smartphone.",
  },
];
