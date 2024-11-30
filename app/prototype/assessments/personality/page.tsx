import React from "react";
import Assessment from "@/components/ui/assessment";
import { assessments } from "@/lib/assessmentData";

const PersonalityTestPage = () => {
  const { title, id, questions } = assessments.workplacePersonalityTest;

  return <Assessment title={title} testId={id} questions={questions} />;
};

export default PersonalityTestPage;
