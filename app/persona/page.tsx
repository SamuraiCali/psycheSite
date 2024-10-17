export default function PersonaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">User Personas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PersonaCard
          name="Emily Chen"
          age={28}
          occupation="Marketing Manager"
          goals={[
            "Understand her personality traits to improve work relationships",
            "Manage stress and anxiety more effectively",
            "Identify career growth opportunities aligned with her psychological profile",
          ]}
          behaviors={[
            "Regularly takes online quizzes and personality tests",
            "Actively seeks self-improvement resources",
            "Shares insights from psychological assessments with close friends and colleagues",
          ]}
          motivations={[
            "Personal growth and self-awareness",
            "Improving mental health and well-being",
            "Enhancing professional performance through better self-understanding",
          ]}
        />
        <PersonaCard
          name="Michael Johnson"
          age={35}
          occupation="HR Specialist"
          goals={[
            "Implement effective psychological evaluation tools for hiring",
            "Improve team dynamics by understanding individual personalities",
            "Develop personalized employee wellness programs",
          ]}
          behaviors={[
            "Regularly researches new psychological assessment methods",
            "Advocates for mental health awareness in the workplace",
            "Uses data-driven approaches to inform HR decisions",
          ]}
          motivations={[
            "Creating a positive and productive work environment",
            "Reducing employee turnover through better job fit",
            "Establishing his company as a leader in employee well-being",
          ]}
        />
      </div>
    </div>
  );
}

interface PersonaCardProps {
  name: string;
  age: number;
  occupation: string;
  goals: string[];
  behaviors: string[];
  motivations: string[];
}

function PersonaCard({
  name,
  age,
  occupation,
  goals,
  behaviors,
  motivations,
}: PersonaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600">
              {age} years old, {occupation}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <Section title="Goals" items={goals} />
          <Section title="Behaviors" items={behaviors} />
          <Section title="Motivations" items={motivations} />
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
