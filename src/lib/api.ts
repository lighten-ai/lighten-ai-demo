import type { TherapeuticArea, Project, AppModule } from "@/lib/mock-data";

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

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
  const res = await fetch(`${getBaseUrl()}/api/therapeutic-areas`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch therapeutic areas");
  return res.json();
}

export async function getTherapeuticAreaBySlug(slug: string): Promise<TherapeuticArea | null> {
  const { suggested } = await getTherapeuticAreas();
  return suggested.find((ta) => ta.slug === slug) ?? null;
}

export async function getApps(): Promise<AppsResponse> {
  const res = await fetch(`${getBaseUrl()}/api/apps`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch apps");
  return res.json();
}
