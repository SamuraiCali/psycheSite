import React from "react";
import { useUser } from "@/lib/UserContext";

const ResultsPage: React.FC = () => {
  const { user, testResults } = useUser();

  if (!user) return <p>Please log in to view your results.</p>;

  return (
    <div>
      <h1>{user.name}'s Test Results</h1>
      {testResults.length === 0 ? (
        <p>No results available.</p>
      ) : (
        <ul>
          {testResults.map((result, index) => (
            <li key={index}>
              Test ID: {result.testId}, Score: {result.score}, Date:{" "}
              {new Date(result.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsPage;
