export default function MoodboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Design Moodboard</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Psyche: Empowering Self-Discovery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <MoodboardItem
              title="Calming Blues"
              description="Soft blue tones evoke trust, tranquility, and professionalism."
            />
            <MoodboardItem
              title="Warm Accents"
              description="Touches of warm colors for a welcoming, encouraging atmosphere."
            />
            <MoodboardItem
              title="Clean Typography"
              description="Modern, readable fonts for clear communication of complex information."
            />
            <MoodboardItem
              title="Intuitive Icons"
              description="Simple, meaningful icons to guide users through the platform."
            />
            <MoodboardItem
              title="Soothing Imagery"
              description="Nature-inspired visuals to create a sense of growth and reflection."
            />
            <MoodboardItem
              title="Data Visualization"
              description="Clear, engaging charts and graphs for presenting assessment results."
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Design Philosophy</h3>
        <p className="text-gray-700">
          The design for Psyche aims to create a sense of trust,
          professionalism, and personal growth. We use a calming color palette
          dominated by soft blues to evoke a sense of stability and reliability,
          essential for a platform dealing with sensitive psychological
          information. Warm accent colors are used sparingly to create a
          welcoming atmosphere and guide users through key actions.
        </p>
        <p className="text-gray-700 mt-4">
          The user interface emphasizes clarity and ease of use, with clean
          typography and intuitive icons helping to simplify complex
          psychological concepts. Data visualizations are designed to be both
          informative and visually appealing, helping users to easily understand
          and engage with their assessment results.
        </p>
        <p className="text-gray-700 mt-4">
          Throughout the platform, we incorporate subtle nature-inspired imagery
          to reinforce themes of personal growth, reflection, and harmony. This
          visual language aims to make the process of psychological assessment
          feel less clinical and more like a journey of self-discovery.
        </p>
      </div>
    </div>
  );
}

interface MoodboardItemProps {
  title: string;
  description: string;
}

function MoodboardItem({ title, description }: MoodboardItemProps) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
