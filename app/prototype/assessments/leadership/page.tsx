"use client";
import React from "react";
import Assessment from "@/components/ui/assessment";
import { assessments } from "@/lib/assessmentData";

const LeadershipTestPage = () => {
  const { title, id, questions } = assessments.leadershipTest;

  return <Assessment title={title} testId={id} questions={questions} />;
};

export default LeadershipTestPage;
