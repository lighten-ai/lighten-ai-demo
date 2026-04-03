import type { TherapeuticArea, Project, AppModule } from "@/lib/mock-data";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

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
  const res = await fetch(`${BASE_URL}/api/therapeutic-areas`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch therapeutic areas");
  return res.json();
}

export async function getTherapeuticArea(id: string): Promise<TherapeuticArea | null> {
  const { suggested } = await getTherapeuticAreas();
  return suggested.find((ta) => ta.id === id) ?? null;
}

export async function getApps(): Promise<AppsResponse> {
  const res = await fetch(`${BASE_URL}/api/apps`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch apps");
  return res.json();
}
