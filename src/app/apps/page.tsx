"use client";

import {
  Search,
  Activity,
  Route,
  Compass,
  Layout,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { appModules } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  activity: Activity,
  route: Route,
  compass: Compass,
  layout: Layout,
};

const statusStyles: Record<string, string> = {
  Enabled: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Not Purchased": "border-orange-200 bg-orange-50 text-orange-700",
};

const previewGradients: Record<string, string> = {
  finder: "from-teal-50 via-cyan-50 to-blue-50",
  pulse: "from-amber-50 via-orange-50 to-rose-50",
  journey: "from-slate-50 via-gray-100 to-slate-50",
  explorer: "from-emerald-50 via-teal-50 to-cyan-50",
  canvas: "from-violet-50 via-purple-50 to-indigo-50",
};

export default function AppsPage() {
  return (
    <div className="p-8">
      <div className="mb-1">
        <p className="text-xs text-muted-foreground">
          Projects / Lighten Demo
        </p>
        <h1 className="text-2xl font-medium">Apps</h1>
      </div>

      {/* Data Refresh Banner */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <RefreshCw className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Data Refresh</p>
            <p className="text-xs text-muted-foreground">
              Update your project with newly curated patient data. Re-run
              analyses to capture new patients and emerging trends.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Last Refresh</p>
            <p className="text-sm font-medium">01/01/2026</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Next Refresh</p>
            <p className="text-sm font-medium">Not Scheduled</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get a Quote
          </Button>
        </div>
      </div>

      {/* App Cards Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appModules.map((app) => {
          const Icon = iconMap[app.icon];
          return (
            <Card
              key={app.id}
              className="overflow-hidden border border-border bg-white shadow-sm"
            >
              {/* Preview Image Placeholder */}
              <div
                className={`h-36 bg-gradient-to-br ${previewGradients[app.id]} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-end justify-center gap-1.5 px-8 pb-4 opacity-25">
                  {[40, 65, 50, 80, 35, 70, 55, 45, 60].map((h, i) => (
                    <div
                      key={i}
                      className="w-3 rounded-t bg-primary/50"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {Icon && (
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    )}
                    <h3 className="font-semibold">{app.name}</h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={statusStyles[app.status]}
                  >
                    {app.status}
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
                <div className="mt-4 flex gap-2">
                  {app.actions.map((action) => (
                    <Button
                      key={action}
                      className={`flex-1 h-10 text-sm font-medium ${
                        action === "Open"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : action === "Preview"
                            ? "border border-primary text-primary bg-white hover:bg-primary/5"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                      variant={action === "Preview" ? "outline" : "default"}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
