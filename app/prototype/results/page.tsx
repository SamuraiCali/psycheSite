import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ResultsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const test = searchParams.get("test");
  const score = searchParams.get("score");

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

export default ResultsPage;
