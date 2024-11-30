export const assessments = {
  leadershipTest: {
    id: "leadership",
    title: "Leadership Test",
    questions: [
      {
        id: "q1",
        question: "How do you handle conflicts within your team?",
        options: [
          "Ignore them",
          "Address them immediately",
          "Delegate responsibility",
        ],
      },
      {
        id: "q2",
        question: "How do you prioritize tasks?",
        options: ["By urgency", "By importance", "Randomly"],
      },
    ],
  },
  neurodivergenceAssessment: {
    id: "neurodivergence",
    title: "Neurodivergence Assessment",
    questions: [
      {
        id: "q1",
        question:
          "Do you often find yourself hyperfocused on specific interests?",
        options: ["Yes", "No", "Sometimes"],
      },
      {
        id: "q2",
        question: "Do you prefer structured or unstructured environments?",
        options: ["Structured", "Unstructured", "Depends"],
      },
    ],
  },
  workplacePersonalityTest: {
    id: "personality",
    title: "Workplace Personality Test",
    questions: [
      {
        id: "q1",
        question: "Do you enjoy collaborating with others?",
        options: ["Yes", "No", "Depends on the project"],
      },
      {
        id: "q2",
        question: "How do you handle deadlines?",
        options: ["Always on time", "Occasionally late", "Often procrastinate"],
      },
    ],
  },
};
