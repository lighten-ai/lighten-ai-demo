"use client";

import { usePathname } from "next/navigation";
import {
  ClipboardCheck,
  BookOpen,
  Table2,
  FolderClosed,
  List,
  ListChecks,
  FileText,
  Monitor,
  PieChart,
  Search,
  Download,
  Share2,
  Bell,
  MessageCircleQuestion,
  FolderTree,
  User,
} from "lucide-react";
import { NavItem } from "@/components/nav-item";
import { type LucideIcon } from "lucide-react";

interface NavSection {
  label: string;
  items: {
    icon: LucideIcon;
    label: string;
    href: string;
  }[];
}

const navSections: NavSection[] = [
  {
    label: "Project",
    items: [
      { icon: ClipboardCheck, label: "Overview", href: "#" },
      { icon: BookOpen, label: "Data Dictionary", href: "#" },
      { icon: Table2, label: "Tables", href: "#" },
    ],
  },
  {
    label: "Run",
    items: [
      { icon: FolderClosed, label: "Cases", href: "#" },
      { icon: List, label: "Variables", href: "#" },
      { icon: ListChecks, label: "Variable Status", href: "#" },
      { icon: FileText, label: "Case Review", href: "#" },
      { icon: Monitor, label: "Cohort Review", href: "#" },
      { icon: PieChart, label: "Insights", href: "#" },
    ],
  },
  {
    label: "Output",
    items: [
      { icon: Search, label: "Analytics", href: "#" },
      { icon: Download, label: "Export", href: "#" },
      { icon: Share2, label: "Share", href: "#" },
    ],
  },
];

const footerItems = [
  { icon: Bell, label: "Notifications", href: "#", badge: 5 },
  { icon: MessageCircleQuestion, label: "Help Center", href: "#" },
];

export function Sidebar() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");

  return (
    <aside className="flex h-full w-[72px] flex-col items-center justify-between border-r border-gray-200 bg-white p-4">
      {/* Top section */}
      <div className="flex w-full flex-col items-center gap-6">
        {/* Logo */}
        <a href="/" className="flex min-h-[40px] min-w-[40px] items-center justify-center p-2">
          <img src="/logomark.svg" alt="Lighten AI" width={22} height={22} />
        </a>

        {/* Project switcher + nav sections — only on project pages */}
        {isProjectPage && (
          <>
            <span className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-gray-300 p-2 opacity-40">
              <FolderTree className="size-5 text-teal-900" />
            </span>

            {navSections.map((section) => (
              <div key={section.label} className="flex w-full flex-col items-center gap-2">
                <span className="text-center text-xs font-medium leading-4 text-gray-500">
                  {section.label}
                </span>
                <div className="flex w-full flex-col items-center gap-1">
                  {section.items.map((item) => (
                    <NavItem
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      href={item.href}
                      disabled={item.href === "#"}
                      collapsed
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex w-full flex-col items-center gap-1">
        {footerItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            disabled={item.href === "#"}
            collapsed
            badge={"badge" in item ? item.badge : undefined}
          />
        ))}
        <span
          className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg p-2 opacity-40"
          title="Jane Doe"
        >
          <div className="relative size-6 rounded-full bg-gray-300">
            <User className="absolute inset-1 text-gray-500" />
            <div className="absolute bottom-0 right-0 size-1.5 rounded-full border-2 border-white bg-green-500" />
          </div>
        </span>
      </div>
    </aside>
  );
}
