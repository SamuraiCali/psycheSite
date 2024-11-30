"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ResultsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const test = searchParams.get("test");
  const score = searchParams.get("score");

  // Check if data is available
  if (!test || !score) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Test Results</h1>
      <p>Test: {test}</p>
      <p>Score: {score}</p>
      <Link href="/">
        <button>Share</button>
      </Link>
    </div>
  );
};

// Wrap in Suspense boundary at higher level in the component tree (App or Parent component)
const SuspenseWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPage />
    </Suspense>
  );
};

export default SuspenseWrapper;
