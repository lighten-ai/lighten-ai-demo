import type { TherapeuticArea, Project, AppModule } from "@/lib/mock-data";

export const suggestedTAs: TherapeuticArea[] = [
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
];

export const projects: Project[] = [
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
];

export const appModules: AppModule[] = [
  {
    id: "finder",
    name: "Finder",
    icon: "search",
    description:
      "Identify and size patients of interest using curated EHR data. Define cohorts by diagnosis, treatment, or severity and understand who they are.",
    status: "Enabled",
    actions: ["Open"],
  },
  {
    id: "pulse",
    name: "Pulse",
    icon: "activity",
    description:
      "Track treatment patterns and market dynamics across your patient population. Monitor utilization shifts and competitive positioning over time.",
    status: "Enabled",
    actions: ["Open"],
  },
  {
    id: "journey",
    name: "Journey",
    icon: "route",
    description:
      "Explore longitudinal patient journeys from diagnosis through outcomes. Analyze sequencing, timing, and disease progression at cohort and patient levels.",
    status: "Not Purchased",
    actions: ["Preview", "Get a Quote"],
  },
  {
    id: "explorer",
    name: "Explorer",
    icon: "compass",
    description:
      "Quickly evaluate data source potential with high-level cohort insights. Designed for early-stage exploration without refresh cycles.",
    status: "Enabled",
    actions: ["Open"],
  },
  {
    id: "canvas",
    name: "Canvas",
    icon: "layout",
    description:
      "Explore your underlying source dataset in a structured environment. Preview cohort dashboards and sample patient journeys before curation.",
    status: "Not Purchased",
    actions: ["Get a Quote"],
  },
];

export const dataRefresh = {
  lastRefresh: "01/01/2026",
  nextRefresh: "Not Scheduled",
};
