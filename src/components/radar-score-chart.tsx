"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface RadarScoreChartProps {
  scores: {
    longitudinality: number;
    providerSpecialty: number;
    curationAssessment: number;
    useCaseFitness: number;
    strategicImpact: number;
  };
  maxScores: {
    longitudinality: number;
    providerSpecialty: number;
    curationAssessment: number;
    useCaseFitness: number;
    strategicImpact: number;
  };
  totalScore: number;
}

export function RadarScoreChart({
  scores,
  maxScores,
  totalScore,
}: RadarScoreChartProps) {
  const data = [
    {
      subject: "Longitudinality of\npatient histories",
      score: (scores.longitudinality / maxScores.longitudinality) * 100,
      fullMark: 100,
    },
    {
      subject: "Provider specialty\ncoverage",
      score: (scores.providerSpecialty / maxScores.providerSpecialty) * 100,
      fullMark: 100,
    },
    {
      subject: "Curation\nassessment",
      score:
        (scores.curationAssessment / maxScores.curationAssessment) * 100,
      fullMark: 100,
    },
    {
      subject: "Use-case\nfitness",
      score: (scores.useCaseFitness / maxScores.useCaseFitness) * 100,
      fullMark: 100,
    },
    {
      subject: "Strategic impact\npotential",
      score: (scores.strategicImpact / maxScores.strategicImpact) * 100,
      fullMark: 100,
    },
  ];

  return (
    <div className="relative h-[300px] w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 11, fill: "#6b7280" }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Score"
            dataKey="score"
            stroke="#2489A8"
            fill="#2489A8"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
      {/* Center Score */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-xs text-muted-foreground">Total Score</div>
          <div className="text-3xl font-bold text-foreground">{totalScore}</div>
        </div>
      </div>
    </div>
  );
}
