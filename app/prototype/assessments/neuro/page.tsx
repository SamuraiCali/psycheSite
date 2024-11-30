import React from "react";
import Assessment from "@/components/ui/assessment";
import { assessments } from "@/lib/assessmentData";

const NeurodivergenceAssessmentPage = () => {
  const { title, id, questions } = assessments.neurodivergenceAssessment;

  return <Assessment title={title} testId={id} questions={questions} />;
};

export default NeurodivergenceAssessmentPage;
