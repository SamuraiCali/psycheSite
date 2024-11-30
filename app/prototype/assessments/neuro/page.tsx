"use client";

import React from "react";
import Assessment from "@/components/ui/assessment";
import { assessments } from "@/lib/assessmentData";

const NeurodivergenceTestPage = () => {
  const { title, id, questions } = assessments.neurodivergenceTest;

  return <Assessment title={title} testId={id} questions={questions} />;
};

export default NeurodivergenceTestPage;
