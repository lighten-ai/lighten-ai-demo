import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    suggested: [
      {
        id: "cardiology",
        slug: "cardiology",
        name: "Cardiology",
        description:
          "This section provides an overview of the treatment options available for cardiovascular diseases.",
        confidence: "High",
        scores: {
          longitudinality: 28,
          providerSpecialty: 23,
          curationAssessment: 18,
          useCaseFitness: 11,
          strategicImpact: 8,
        },
        maxScores: {
          longitudinality: 30,
          providerSpecialty: 25,
          curationAssessment: 20,
          useCaseFitness: 15,
          strategicImpact: 10,
        },
        totalScore: 85,
        reasons: [
          "High patient volume with repeat encounters supporting longitudinal views",
          "Medication + diagnosis patterns are consistently documented for reliable cohorting",
          "Multiple outcome proxies available across notes, labs, and procedures",
        ],
      },
      {
        id: "oncology",
        slug: "oncology",
        name: "Oncology",
        description:
          "Explore the latest advancements in cancer treatment and patient care.",
        confidence: "High",
        scores: {
          longitudinality: 26,
          providerSpecialty: 22,
          curationAssessment: 17,
          useCaseFitness: 13,
          strategicImpact: 9,
        },
        maxScores: {
          longitudinality: 30,
          providerSpecialty: 25,
          curationAssessment: 20,
          useCaseFitness: 15,
          strategicImpact: 10,
        },
        totalScore: 87,
        reasons: [
          "Detailed treatment sequencing data available across multiple lines of therapy",
          "Strong biomarker and genomic data presence supports precision medicine analyses",
          "Well-documented progression and response endpoints across clinical notes",
        ],
      },
    ],
    projects: [
      {
        id: "proj-1",
        slug: "cardiology-hae-study",
        name: "Cardiology HAE Study",
        therapeuticAreaId: "cardiology",
        therapeuticAreaName: "Cardiology",
        lastModified: "01/01/2026",
        lastRefresh: "01/01/2026",
      },
      {
        id: "proj-2",
        slug: "oncology-nsclc-analysis",
        name: "Oncology NSCLC Analysis",
        therapeuticAreaId: "oncology",
        therapeuticAreaName: "Oncology",
        lastModified: "01/01/2026",
        lastRefresh: "01/01/2026",
      },
    ],
  });
}
