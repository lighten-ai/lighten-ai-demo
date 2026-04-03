import { NextResponse } from "next/server";
import { appModules, dataRefresh } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ apps: appModules, dataRefresh });
}
