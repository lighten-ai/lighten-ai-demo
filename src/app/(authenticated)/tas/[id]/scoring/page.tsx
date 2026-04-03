import { notFound } from "next/navigation";
import { getTherapeuticArea } from "@/lib/api";
import { TAScoringView } from "@/components/ta-scoring-view";

export default async function TAScoringPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ta = await getTherapeuticArea(id);

  if (!ta) notFound();

  return <TAScoringView ta={ta} />;
}
