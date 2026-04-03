export interface TherapeuticArea {
  id: string;
  slug: string;
  name: string;
  description: string;
  confidence: "High" | "Medium" | "Low";
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
  reasons: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  therapeuticAreaId: string;
  therapeuticAreaName: string;
  lastModified: string;
  lastRefresh: string;
}

export interface AppModule {
  id: string;
  name: string;
  icon: string;
  description: string;
  status: "Enabled" | "Not Purchased";
  actions: ("Open" | "Preview" | "Get a Quote")[];
}
