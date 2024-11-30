export type Question = {
  id: string;
  question: string;
  options: string[];
};

export type Assessment = {
  id: string;
  title: string;
  questions: Question[];
};

export const assessments: Record<string, Assessment> = {
  leadershipTest: {
    id: "leadership",
    title: "Leadership Style Assessment",
    questions: [
      {
        id: "l1",
        question: "How do you typically make decisions in a team setting?",
        options: [
          "I make the final decision without much input",
          "I gather input from the team before deciding",
          "I let the team make decisions on their own",
          "I inspire the team to come up with innovative solutions",
        ],
      },
      {
        id: "l2",
        question: "How do you handle conflicts within your team?",
        options: [
          "I step in and resolve the conflict myself",
          "I facilitate a discussion to find a solution",
          "I let team members work it out on their own",
          "I use the conflict as an opportunity for growth",
        ],
      },
      {
        id: "l3",
        question: "How do you motivate your team?",
        options: [
          "I use rewards and punishments",
          "I involve team members in goal-setting",
          "I give them autonomy to pursue their interests",
          "I share an inspiring vision for the future",
        ],
      },
      {
        id: "l4",
        question: "How do you approach change in your organization?",
        options: [
          "I implement changes quickly and decisively",
          "I involve the team in planning and implementing changes",
          "I let changes happen organically",
          "I actively seek out and champion innovative changes",
        ],
      },
      {
        id: "l5",
        question: "How do you view your role as a leader?",
        options: [
          "To direct and control the team's activities",
          "To facilitate collaboration and decision-making",
          "To provide resources and remove obstacles",
          "To inspire and empower others to achieve their best",
        ],
      },
    ],
  },
  neurodivergenceTest: {
    id: "neurodivergence",
    title: "Neurodivergence Assessment",
    questions: [
      {
        id: "n1",
        question: "How do you typically approach tasks and deadlines?",
        options: [
          "I struggle to start tasks and often procrastinate",
          "I hyperfocus on tasks and lose track of time",
          "I prefer to follow a strict routine and schedule",
          "I'm flexible and can easily switch between tasks",
        ],
      },
      {
        id: "n2",
        question: "How do you process sensory information?",
        options: [
          "I'm often overwhelmed by sensory input (lights, sounds, textures)",
          "I seek out intense sensory experiences",
          "I have trouble distinguishing between different sensory inputs",
          "I process sensory information without any notable issues",
        ],
      },
      {
        id: "n3",
        question: "How do you communicate with others?",
        options: [
          "I struggle with social cues and nonverbal communication",
          "I tend to speak my mind without considering social norms",
          "I prefer written communication over verbal",
          "I communicate easily in most social situations",
        ],
      },
      {
        id: "n4",
        question: "How do you handle changes in routine or unexpected events?",
        options: [
          "I become very anxious and stressed",
          "I adapt quickly and enjoy the novelty",
          "I need time to process and adjust",
          "I'm generally unaffected by changes",
        ],
      },
      {
        id: "n5",
        question: "How do you approach problem-solving?",
        options: [
          "I see unique patterns and connections others might miss",
          "I struggle to break down complex problems",
          "I prefer step-by-step instructions",
          "I can easily think of multiple solutions to a problem",
        ],
      },
    ],
  },
  personalityTest: {
    id: "personality",
    title: "Workplace Personality Assessment",
    questions: [
      {
        id: "p1",
        question: "How do you prefer to work on projects?",
        options: [
          "Independently, with minimal interaction",
          "In a small, close-knit team",
          "In a large, diverse group",
          "Alternating between teamwork and individual tasks",
        ],
      },
      {
        id: "p2",
        question: "How do you handle stress at work?",
        options: [
          "I remain calm and analytical",
          "I seek support from colleagues",
          "I become energized and work harder",
          "I need time alone to recharge",
        ],
      },
      {
        id: "p3",
        question: "How do you approach new ideas or changes in the workplace?",
        options: [
          "I'm skeptical and need convincing",
          "I'm excited and quick to adopt new ideas",
          "I carefully consider the pros and cons",
          "I prefer to stick with tried-and-true methods",
        ],
      },
      {
        id: "p4",
        question: "How do you prefer to receive recognition for your work?",
        options: [
          "Public acknowledgment and awards",
          "Private feedback from my supervisor",
          "Tangible rewards (bonuses, promotions)",
          "The satisfaction of a job well done is enough",
        ],
      },
      {
        id: "p5",
        question: "How do you typically contribute in meetings?",
        options: [
          "I prefer to listen and observe",
          "I actively share ideas and opinions",
          "I focus on keeping the discussion on track",
          "I enjoy brainstorming and thinking outside the box",
        ],
      },
    ],
  },
};
