"use client";

import React from "react";
import Assessment from "@/components/ui/assessment";
import { assessments } from "@/lib/assessmentData";

const PersonalityTestPage = () => {
  const { title, id, questions } = assessments.personalityTest;

  return <Assessment title={title} testId={id} questions={questions} />;
};

export default PersonalityTestPage;
