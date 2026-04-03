"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
  disabled?: boolean;
  collapsed?: boolean;
  badge?: number;
}

export function NavItem({
  icon: Icon,
  label,
  href,
  isActive = false,
  disabled = false,
  collapsed = true,
  badge,
}: NavItemProps) {
  const className = cn(
    "relative flex min-h-[40px] min-w-[40px] items-center gap-2 rounded-lg p-2 transition-colors",
    isActive
      ? "border border-teal-300 bg-teal-50"
      : disabled
        ? "opacity-40"
        : "hover:bg-gray-100"
  );

  const iconEl = (
    <Icon
      className={cn(
        "size-5 shrink-0",
        isActive ? "text-teal-600" : "text-gray-700"
      )}
    />
  );

  const badgeEl = badge != null && (
    <span
      className={cn(
        "flex min-w-[20px] items-center justify-center rounded-md px-1 py-0.5 text-xs font-medium leading-4",
        collapsed ? "absolute -right-1 -top-1" : "shrink-0",
        isActive ? "bg-teal-200 text-teal-800" : "bg-red-200 text-red-800"
      )}
    >
      {badge}
    </span>
  );

  if (disabled) {
    return (
      <span className={className} title={collapsed ? label : undefined}>
        {iconEl}
        {!collapsed && (
          <span className="min-w-0 flex-1 truncate text-base font-medium leading-6 text-gray-700">
            {label}
          </span>
        )}
        {badgeEl}
      </span>
    );
  }

  return (
    <Link href={href} className={className} title={collapsed ? label : undefined}>
      {iconEl}
      {!collapsed && (
        <span
          className={cn(
            "min-w-0 flex-1 truncate text-base font-medium leading-6",
            isActive ? "text-teal-600" : "text-gray-700"
          )}
        >
          {label}
        </span>
      )}
      {badgeEl}
    </Link>
  );
}
