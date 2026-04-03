import { getTherapeuticAreas } from "@/lib/api";
import { TAPageContent } from "@/components/ta-page-content";

export default async function TherapeuticAreasPage() {
  const { suggested, projects } = await getTherapeuticAreas();

  return (
    <TAPageContent
      suggested={suggested}
      projects={projects}
    />
  );
}
