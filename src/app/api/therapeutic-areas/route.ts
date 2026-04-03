import { NextResponse } from "next/server";
import { suggestedTAs, projects } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ suggested: suggestedTAs, projects });
}
