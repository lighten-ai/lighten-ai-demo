import { notFound } from "next/navigation";
import { getTherapeuticAreaBySlug } from "@/lib/api";
import { TAScoringView } from "@/components/ta-scoring-view";

export default async function TAScoringPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ta = await getTherapeuticAreaBySlug(slug);

  if (!ta) notFound();

  return <TAScoringView ta={ta} />;
}
