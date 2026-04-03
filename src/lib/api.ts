import type { TherapeuticArea, Project, AppModule } from "@/lib/mock-data";
import {
  suggestedTAs,
  projects,
  appModules,
  dataRefresh,
} from "@/lib/data";

interface TherapeuticAreasResponse {
  suggested: TherapeuticArea[];
  projects: Project[];
}

interface AppsResponse {
  apps: AppModule[];
  dataRefresh: {
    lastRefresh: string;
    nextRefresh: string;
  };
}

export async function getTherapeuticAreas(): Promise<TherapeuticAreasResponse> {
  return { suggested: suggestedTAs, projects };
}

export async function getTherapeuticAreaBySlug(slug: string): Promise<TherapeuticArea | null> {
  return suggestedTAs.find((ta) => ta.slug === slug) ?? null;
}

export async function getApps(): Promise<AppsResponse> {
  return { apps: appModules, dataRefresh };
}
