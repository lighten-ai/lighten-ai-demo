import {
  Search,
  Activity,
  Route,
  Compass,
  Layout,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/title";
import { PrimaryButton } from "@/components/primary-button";
import { getApps } from "@/lib/api";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  activity: Activity,
  route: Route,
  compass: Compass,
  layout: Layout,
};

const statusStyles: Record<string, string> = {
  Enabled: "border-transparent bg-green-100 text-green-800",
  "Not Purchased": "border-transparent bg-gray-200 text-gray-800",
};

const appImages: Record<string, string> = {
  finder: "/finder.png",
  pulse: "/pulse.png",
  journey: "/journey.png",
  explorer: "/explorer.png",
  canvas: "/canvas.png",
};

export default async function AppsPage() {
  const { apps, dataRefresh } = await getApps();

  return (
    <div className="p-8">
      <div className="mb-1">
        <p className="text-base font-medium leading-6">
          <a href="/" className="text-gray-500 hover:text-gray-700">Projects</a>
          <span className="text-gray-500"> / </span>
          <span className="text-gray-900">Lighten Demo</span>
        </p>
        <Title>Apps</Title>
      </div>

      {/* Data Refresh Banner */}
      <div className="mt-4 flex items-center justify-between rounded-lg border border-teal-300 px-6 py-4 bg-gradient-to-r from-teal-50 to-green-50">
        <div className="flex items-start gap-2">
          <RefreshCw className="size-6 shrink-0 text-teal-600" />
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold leading-6 text-gray-900">Data Refresh</p>
            <p className="text-sm font-medium leading-5 text-gray-700">
              Update your project with newly curated patient data. Re-run
              analyses to capture new patients and emerging trends.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium leading-4 text-gray-500">Last Refresh</p>
            <p className="text-sm font-semibold leading-5 text-gray-700">{dataRefresh.lastRefresh}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium leading-4 text-gray-500">Next Refresh</p>
            <p className="text-sm font-semibold leading-5 text-gray-700">{dataRefresh.nextRefresh}</p>
          </div>
          <PrimaryButton>Get a Quote</PrimaryButton>
        </div>
      </div>

      {/* App Cards Grid */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {apps.map((app) => {
          const Icon = iconMap[app.icon];
          return (
            <Card
              key={app.id}
              className="gap-0 overflow-hidden border border-gray-200 bg-white py-0"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={appImages[app.id]}
                  alt={app.name}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white" />
              </div>

              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-start gap-2">
                  {Icon && <Icon className="size-6 shrink-0 text-teal-500" />}
                  <h3 className="flex-1 text-base font-semibold leading-6 text-gray-900">{app.name}</h3>
                  <Badge variant="outline" className={`rounded-md ${statusStyles[app.status]}`}>
                    {app.status}
                  </Badge>
                </div>
                <p className="text-sm font-medium leading-5 text-gray-700">
                  {app.description}
                </p>
                <div className="flex flex-row gap-4">
                  {app.actions.map((action) => (
                    <PrimaryButton
                      key={action}
                      variant={action === "Open" || action === "Preview" ? "outline" : "default"}
                      size="default"
                      className="flex-1"
                    >
                      {action}
                    </PrimaryButton>
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
