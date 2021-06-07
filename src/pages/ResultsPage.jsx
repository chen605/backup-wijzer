import React from "react";
import Chart from "../components/Chart";
import { CircleProgress } from "react-gradient-progress";

export default function ResultsPage() {
  return (
    <div className="results-page">
      <Chart />
      <CircleProgress
        percentage={80}
        strokeWidth={8}
        primaryColor={["#F23535", "#F27979"]}
        secondaryColor="#f0f0f0"
      />
      <CircleProgress
        percentage={60}
        strokeWidth={8}
        primaryColor={["#115569", "#66D1D1"]}
        secondaryColor="#f0f0f0"
      />
      <CircleProgress
        percentage={80}
        strokeWidth={8}
        primaryColor={["#FDD540", "#F2D264"]}
        secondaryColor="#f0f0f0"
      />
      <CircleProgress
        percentage={80}
        strokeWidth={8}
        primaryColor={["#736559", "#A6978A"]}
        secondaryColor="#f0f0f0"
      />
      <CircleProgress
        percentage={75}
        strokeWidth={8}
        primaryColor={["#000636", "#011EF5"]}
        secondaryColor="#f0f0f0"
      />
    </div>
  );
}
