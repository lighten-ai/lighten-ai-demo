import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    apps: [
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
    ],
    dataRefresh: {
      lastRefresh: "01/01/2026",
      nextRefresh: "Not Scheduled",
    },
  });
}
