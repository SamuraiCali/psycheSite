export default function StoryboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        User Journey Storyboard
      </h1>
      <div className="bg-black rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Emily's Psyche Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StoryboardPanel
              title="1. Sign Up and Onboarding"
              description="Emily discovers Psyche and creates an account. She's greeted with a welcoming interface that explains the platform's benefits."
            />
            <StoryboardPanel
              title="2. Selecting Assessments"
              description="Emily browses through available tests and questionnaires, choosing ones that align with her goals for self-discovery and stress management."
            />
            <StoryboardPanel
              title="3. Taking Assessments"
              description="As Emily progresses through the assessments, she appreciates the intuitive interface and thought-provoking questions."
            />
            <StoryboardPanel
              title="4. Receiving Results"
              description="Emily receives a comprehensive report with insights into her personality traits, stress triggers, and coping strategies."
            />
            <StoryboardPanel
              title="5. Exploring Insights"
              description="Emily dives deeper into her results, using interactive tools to understand how her traits influence various aspects of her life."
            />
            <StoryboardPanel
              title="6. Sharing and Acting"
              description="Emily creates a shareable summary of her profile and schedules a meeting with her manager to discuss how to optimize her work environment."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface StoryboardPanelProps {
  title: string;
  description: string;
}

function StoryboardPanel({ title, description }: StoryboardPanelProps) {
  return (
    <div className="bg-white-100 rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
