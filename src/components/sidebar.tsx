"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  FileText,
  BookOpen,
  TableProperties,
  BarChart3,
  ClipboardList,
  GitBranch,
  MessageSquare,
  Globe,
  Search,
  Download,
  Share2,
  Bell,
  HelpCircle,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const topNavItems = [
  { icon: LayoutGrid, label: "Project", href: "/" },
  { icon: FileText, label: "Pages", href: "#" },
  { icon: BookOpen, label: "Book", href: "#" },
  { icon: TableProperties, label: "Tables", href: "#" },
  { icon: BarChart3, label: "Run", href: "#" },
  { icon: ClipboardList, label: "Tasks", href: "#" },
  { icon: GitBranch, label: "Flow", href: "#" },
  { icon: MessageSquare, label: "Chat", href: "#" },
  { icon: Globe, label: "Apps", href: "/apps" },
];

const bottomNavItems = [
  { icon: Search, label: "Search", href: "#" },
  { icon: Download, label: "Output", href: "#" },
  { icon: Share2, label: "Share", href: "#" },
];

const footerNavItems = [
  { icon: Bell, label: "Notifications", href: "#", badge: 5 },
  { icon: HelpCircle, label: "Help", href: "#" },
  { icon: User, label: "Profile", href: "#" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[72px] flex-col items-center border-r border-border bg-white pt-4">
      <Link href="/" className="mb-4 flex h-10 w-10 items-center justify-center">
        <img src="/logomark.svg" alt="Lighten AI" width={22} height={22} />
      </Link>

      <nav className="flex flex-1 flex-col items-center gap-0.5">
        {topNavItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/" && pathname === "/") ||
            (item.href !== "/" && item.href !== "#" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              title={item.label}
            >
              <item.icon className="h-[18px] w-[18px]" />
            </Link>
          );
        })}

        <div className="my-2 h-px w-6 bg-border" />

        {bottomNavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title={item.label}
          >
            <item.icon className="h-[18px] w-[18px]" />
          </Link>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-0.5 pb-4">
        {footerNavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title={item.label}
          >
            <item.icon className="h-[18px] w-[18px]" />
            {"badge" in item && item.badge && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}
